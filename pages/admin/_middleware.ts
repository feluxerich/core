import { NextRequest, NextResponse } from 'next/server';
import config from '@config/middleware';
import { verifyAuth } from '@utils/core/worker';

export async function middleware(req: NextRequest) {
  const [verified, error, jwt] = await verifyAuth(req);

  if (error) {
    // error
  }

  if (!verified) {
    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  }

  if (!jwt.admin) {
    return NextResponse.redirect(`${req.nextUrl.origin}/`);
  }

  return NextResponse.next();
}
