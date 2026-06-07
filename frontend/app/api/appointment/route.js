import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.WEBHOOK_URL || process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn('Webhook URL is not configured on the server.');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Webhook returned status ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error forwarding submission to n8n:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit appointment request. Please try again.' },
      { status: 500 }
    );
  }
}
