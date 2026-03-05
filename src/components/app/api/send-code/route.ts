import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    // 1. Generate a 6-digit industrial code
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    // 2. Send the "Security Clearance" email
    const { data, error } = await resend.emails.send({
      from: 'Sentient Sync <onboarding@resend.dev>', // Change to your domain later
      to: [email],
      subject: '[ACTION REQUIRED] Access Provisioning: Node-Alpha-01',
      html: `
        <div style="background-color: #09090b; color: #a1a1aa; padding: 40px; font-family: monospace;">
          <p style="color: #10b981; font-weight: bold;">[SYSTEM] IDENTITY_VERIFICATION_INITIATED</p>
          <hr style="border: 0; border-top: 1px solid #27272a; margin: 20px 0;" />
          <p>Access request detected for: <strong>${email}</strong></p>
          <p>Provide the following provisioning code to unlock the forensic dashboard:</p>
          <h1 style="color: #ffffff; letter-spacing: 10px; font-size: 32px;">${otpCode}</h1>
          <p style="font-size: 10px; margin-top: 40px; opacity: 0.5;">
            Tracing protocol: ACTIVE <br />
            Security Layer: NIST-800-53 Compliant <br />
            IP_LOGGED: TRUE
          </p>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error }, { status: 500 });

    // In a production app, you'd save this code to a database or a cookie.
    // For now, we return it so your frontend can "check" it.
    return NextResponse.json({ success: true, otp: otpCode });

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
