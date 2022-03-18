export interface HistoryOptions {}

export interface HistoryItem {
  client_id: string;

  client_ip: string | null;
  client_ua: string | null;

  sessionId: string;
  sessionStart: number;
  sessionEnd: number | null;
}

export interface HistoryInsertResponse {}
