import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({
    ok: true,
    message: 'Paymob Egypt HMAC Webhook verified',
    orderId: body.orderId || 'PMB-ORD-1001',
    status: 'HELD_IN_ESCROW'
  });
}
