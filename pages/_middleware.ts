import { NextRequest, NextResponse } from 'next/server';
import { loginRequired } from '@config/middleware';
import { verifyAuth } from '@utils/utils';

export async function middleware(req: NextRequest) {
  if (!req.page.name || !loginRequired.includes(req.page.name)) return;

  const [verified, error, jwt] = await verifyAuth(req);

  if (!verified) {
    return NextResponse.redirect('/login');
  }

  console.log(jwt);

  return NextResponse.next();
}
