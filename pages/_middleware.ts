import { NextRequest, NextResponse } from 'next/server';
import { loginRequired } from '@config/middleware';
import { checkJwtToken } from '@utils/utils';

export function middleware(req: NextRequest) {
  if (!req.page.name || !loginRequired.includes(req.page.name)) {
    return;
  }

  if (req.cookies.jwt && checkJwtToken(req.cookies.jwt)) {
    return NextResponse.next();
  }

  return NextResponse.redirect('/login');
}
