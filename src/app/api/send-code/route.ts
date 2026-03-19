import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);
const FORBIDDEN_DOMAINS = ['guerrillamail.com', '10minutemail.com', 'temp-mail.org'];

export async function POST(req: Request) {
  const dbPath = path.resolve(process.cwd(), 'sentient_sync.db');
  let db = null;

  try {
    const { email } = await req.json();
    const domain = email.split('@')[1];

    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS login_attempts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        email TEXT,
        ip_address TEXT,
        user_agent TEXT
      )
    `);

    await db.run(
      'INSERT INTO login_attempts (email, ip_address, user_agent) VALUES (?, ?, ?)',
      [email, ip, userAgent]
    );

    if (FORBIDDEN_DOMAINS.includes(domain)) {
      return NextResponse.json({ error: 'RESTRICTED_DOMAIN_ACCESS_DENIED' }, { status: 403 });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    const { data, error } = await resend.emails.send({
      from: 'Sentient Sync <onboarding@resend.dev>',
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

    return NextResponse.json({ success: true, otp: otpCode });

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    if (db) {
      await db.close();
    }
  }
}
