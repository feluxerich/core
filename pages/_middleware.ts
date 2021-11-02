import { NextRequest, NextResponse } from 'next/server';
import config from '@config/middleware';
import { core } from '@utils/api';

export async function middleware(req: NextRequest) {
  if (!req.page.name || !config.restricted.includes(req.page.name)) return;
  const [verified, error, jwt] = await core.verify(req);

  if (!verified) {
    return NextResponse.redirect('/login');
  }

  return NextResponse.next();
}
