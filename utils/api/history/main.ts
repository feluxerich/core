import historySchema from '@models/historySchema';
import { HistoryItem } from '@Types/history';
import { connectToDatabase } from '@utils/database';
import { getClientIp, Request } from 'request-ip';

class History {
  private get schema() {
    return historySchema;
  }

  private getBase(req: Request) {
    return {
      ip: getClientIp(req),
      ua: req.headers['user-agent'] ? req.headers['user-agent'] : null,
    };
  }

  private sessionId(client_id: string, sessionStart: number) {
    const id = Buffer.from(client_id, 'utf-8').toString('base64url');
    const timestamp = Buffer.from(sessionStart.toString(), 'utf-8').toString('base64url');

    return `${id}.${timestamp}`;
  }

  public get(client_id: string, req: Request): HistoryItem {
    const base = this.getBase(req);
    const sessionStart = Date.now();

    return {
      client_id: client_id,

      client_ip: base.ip,
      client_ua: base.ua,

      sessionId: this.sessionId(client_id, sessionStart),
      sessionStart: sessionStart,
      sessionEnd: null,
    };
  }

  private async init() {
    return await connectToDatabase();
  }

  public async insert(client_id: string, req: Request) {
    await this.init();
    const item = this.get(client_id, req);
    console.log(client_id);
    const doc = new this.schema(item);
    console.log(doc);
    await doc.save();

    return item;
  }

  public async setSessionEnd(sessionId: string) {
    await this.init();

    return await this.schema.updateOne({ sessionId }, { sessionEnd: Date.now() });
  }
}

export const history = new History();
export default history;
