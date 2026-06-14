import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(2, "שם חייב להכיל לפחות 2 תווים"),
  phone: z.string().min(9, "מספר טלפון לא תקין"),
  org: z.string().optional().default(""),
  message: z.string().optional().default(""),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "נתונים לא תקינים" },
        { status: 400 }
      );
    }

    const { name, phone, org, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Graceful fallback — log and accept (no email sent)
      console.warn("[lead] RESEND_API_KEY not set — skipping email");
      return NextResponse.json({ ok: true, fallback: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const html = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f0f4f6; border-radius: 12px;">
        <div style="background: #ea4e24; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 22px;">📨 פנייה חדשה מהאתר</h1>
          <p style="margin: 6px 0 0; opacity: 0.8; font-size: 14px;">לאה גרינברג – סדנאות ODT</p>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #2000af; width: 120px;">שם:</td>
              <td style="padding: 10px 0; color: #0d0a2e;">${name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 0; font-weight: bold; color: #2000af;">טלפון:</td>
              <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #ea4e24; font-weight: bold;">${phone}</a></td>
            </tr>
            ${org ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #2000af;">ארגון:</td>
              <td style="padding: 10px 0; color: #0d0a2e;">${org}</td>
            </tr>` : ""}
            ${message ? `<tr style="background: #f9fafb;">
              <td style="padding: 10px 0; font-weight: bold; color: #2000af; vertical-align: top;">הודעה:</td>
              <td style="padding: 10px 0; color: #0d0a2e;">${message}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f0f4f6; border-radius: 8px; text-align: center;">
            <a href="tel:${phone}" style="display: inline-block; background: #ea4e24; color: white; padding: 12px 24px; border-radius: 100px; font-weight: bold; text-decoration: none; margin: 0 8px;">📞 התקשרו עכשיו</a>
            <a href="mailto:odt.leag@gmail.com" style="display: inline-block; background: #2000af; color: white; padding: 12px 24px; border-radius: 100px; font-weight: bold; text-decoration: none; margin: 0 8px;">✉️ מייל</a>
          </div>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "ODT Website <onboarding@resend.dev>",
      to: ["odt.leag@gmail.com"],
      subject: `פנייה חדשה מהאתר – ${name}`,
      html,
      replyTo: `${name} <noreply@odt-leag.co.il>`,
    });

    if (error) {
      console.error("[lead] Resend error:", error);
      return NextResponse.json(
        { error: "שגיאה בשליחת המייל. נסו שוב או פנו במייל." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] Unexpected error:", err);
    return NextResponse.json(
      { error: "שגיאה פנימית. נסו שוב." },
      { status: 500 }
    );
  }
}
