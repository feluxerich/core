import { NextRequest, NextResponse } from 'next/server';
import config from '@config/middleware';
import { verifyAuth } from '@utils/api/core/worker';

export async function middleware(req: NextRequest) {
  if (!req.page.name || config.open.includes(req.page.name) || req.page.name.startsWith('/api')) return;
  const [verified, error, jwt] = await verifyAuth(req);

  if (error) {
    // error
  }

  if (!verified) {
    return NextResponse.redirect(`${req.nextUrl.origin}/login?nextPage=${req.page.name}`);
  }

  return NextResponse.next();
}
