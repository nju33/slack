export interface SlashCommandPayload {
  token: string;
  team_id: string;
  team_domain: string;
  enterprise_id: string;
  enterprise_name: string;
  channel_id: string;
  channel_name: string;
  user_id: string;
  user_name: string;
  command: string;
  text: string;
  response_url: string;
  trigger_id: string;
}

export interface SlashCommandPayloadByCamelCase {
  token: string;
  teamId: string;
  teamDomain: string;
  enterpriseId: string;
  enterpriseName: string;
  channelId: string;
  channelName: string;
  userId: string;
  userName: string;
  command: string;
  text: string;
  responseUrl: string;
  triggerId: string;
}
