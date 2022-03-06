import { NextRequest, NextResponse } from 'next/server';
import config from '@config/middleware';
import { verifyAuth } from '@utils/api/core/worker';

export async function middleware(req: NextRequest) {
  if (!req.page.name || !config.restricted.includes(req.page.name)) return;
  const [verified, error, jwt] = await verifyAuth(req);

  if (error) {
    // error
  }

  if (!verified) {
    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  }

  return NextResponse.next();
}
