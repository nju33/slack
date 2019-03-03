import {Attachment} from '../structs/slack';

export const useListener = (attachment: Attachment) => (
  type: string,
  actionType: string,
  callback: (value: {name: string; type: string; value: string}) => any,
) => (payload: any) => {
  if (
    payload.callbackId === attachment.callbackId &&
    payload.type === type &&
    payload.actions[0].type === actionType
  ) {
    return callback(payload.actions[0]);
  }
};
