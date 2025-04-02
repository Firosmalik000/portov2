import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_ivHQ9Dhg_PAAX7sgidR9nsfCovLiYmSWs');

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Please fill in all fields.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['firosmalik44@gmail.com'],
      subject: subject,
      //   react: EmailTemplate(emailDetail),
      react: ` <div>
      <h1>Welcome, ${name}!</h1>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    </div>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.', details: error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
