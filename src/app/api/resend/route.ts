import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { WelcomeEmail } from '@/emails/WelcomeEmail';
import { Pool } from 'pg';
import { Env } from '@/libs/Env';

const resend = new Resend(Env.RESEND_API_KEY);
const pool = new Pool({
  connectionString: Env.DATABASE_URL,
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Save email to database
    const client = await pool.connect();
    try {
      // 在 try 块的开始处添加
console.log('Received email:', email);

// 在数据库插入操作之后添加
console.log('Email saved to database');

// 在 catch 块中添加
console.error('Error details:', error);
      await client.query('INSERT INTO newsletter_subscribers (email) VALUES ($1)', [email]);
    } finally {
      client.release();
    }

    const { data, error } = await resend.emails.send({
      from: 'Rolitt <noreply@rolitt.com>',
      to: email,
      subject: 'Welcome to Rolitt Newsletter!',
      react: WelcomeEmail({ email }),
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Subscription successful. Welcome email sent!' });
  } catch (error) {
    console.error('Subscription failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}