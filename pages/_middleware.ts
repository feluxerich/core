import { NextRequest, NextResponse } from 'next/server';
import config from '@config/middleware';
import { verifyAuth } from '@utils/core/worker';
import { vitals } from '@utils/vitals';

export async function middleware(req: NextRequest) {
  if (!req.page.name || !config.restricted.includes(req.page.name)) return;
  const [verified, error, jwt] = await verifyAuth(req);

  const report = vitals.worker(req);

  console.log(report);

  if (error) {
    // error
  }

  if (!verified) {
    return NextResponse.redirect(`${req.url}login`);
  }

  return NextResponse.next();
}
