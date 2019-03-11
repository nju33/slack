interface Team {
  id: string;
  domain: string;
}

interface User {
  id: string;
  name: string;
}

interface Channel {
  id: string;
  name: string;
}

interface File {
  id: string;
  created: number;
  timestamp: number;
  name: string;
  title: string;
  mimetype: string;
  filetype: string;
  pretty_type: string;
  user: string;
  editable: boolean;
  size: number;
  mode: string;
  is_external: boolean;
  external_type: string;
  is_public: boolean;
  public_url_shared: boolean;
  display_as_bot: boolean;
  username: string;
  url_private: string;
  url_private_download: string;
  permalink: string;
  permalink_public: string;
  is_starred: boolean;
}

interface Message {
  type: string;
  text: string;
  files: File[];
  upload: boolean;
  user: string;
  display_as_bot: boolean;
  ts: string;
}

export interface InteractiveActionBody {
  type: string;
  token: string;
  action_ts: string;
  team: Team;
  user: User;
  channel: Channel;
  callback_id: string;
  trigger_id: string;
  message_ts: string;
  message: Message;
  response_url: string;
}

export interface InteractiveMessageBody {
  payload: string;
}

interface SelectedOption {
  value: string;
}

export interface InteractiveMessageButtonAction {
  name: string;
  type: string;
  value: string;
}

export interface InteractiveMessageSelectAction {
  name: string;
  type: string;
  selected_options: SelectedOption[];
}

type Action = InteractiveMessageButtonAction | InteractiveMessageSelectAction;

export interface InteractiveMessagePayload<A extends Action = Action> {
  type: string;
  actions: A[];
  callback_id: string;
  team: Team;
  channel: Channel;
  user: User;
  action_ts: string;
  message_ts: string;
  attachment_id: string;
  token: string;
  is_app_unfurl: boolean;
  response_url: string;
  trigger_id: string;
}
