interface File {
  id: string;
}

interface FileCreatedEvent {
  type: 'file_created';
  file: File;
  file_id: string;
  user_id: string;
  event_ts: string;
}

interface FileShareEvent {
  type: 'file_shared';
  channel_id: string;
  file_id: string;
  user_id: string;
  file: File;
  event_ts: string;
}

type Event = FileCreatedEvent | FileShareEvent;

export interface RootObject {
  token: string;
  team_id: string;
  api_app_id: string;
  event: Event;
  type: string;
  event_id: string;
  event_time: number;
  authed_users: string[];
}
