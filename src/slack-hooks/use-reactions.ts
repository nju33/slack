import {ReactionsAPIType} from './../type-aliases';
import {Reactions} from '../structs/slack';

// tslint:disable-next-line:no-namespace
namespace UseReactions {
  export function fn(
    type: 'add' | 'remove',
    name: string,
  ): {
    json: Reactions['export'];
    updateName: Reactions['updateName'];
    setToken: Reactions['setToken'];
    setChannel: Reactions['setChannel'];
    setTimestamp: Reactions['setTimestamp'];
  };
  export function fn(
    type: 'get',
  ): {
    json: Reactions['export'];
    setToken: Reactions['setToken'];
    setChannel: Reactions['setChannel'];
    setFull: Reactions['setFull'];
    setTimestamp: Reactions['setTimestamp'];
  };
  export function fn(
    type: 'list',
  ): {
    json: Reactions['export'];
    setToken: Reactions['setToken'];
    setFull: Reactions['setFull'];
    setLimit: Reactions['setLimit'];
    setCount: Reactions['setCount'];
    setCursor: Reactions['setCursor'];
    setPage: Reactions['setPage'];
    setUser: Reactions['setUser'];
  };
  export function fn(type: ReactionsAPIType, name?: string) {
    const reactions = new Reactions();

    switch (type) {
      case 'add':
      case 'remove': {
        reactions.setName(name as string);

        return {
          json: reactions.export.bind(reactions),
          updateName: reactions.updateName,
          setToken: reactions.setToken,
          setChannel: reactions.setChannel,
          setTimestamp: reactions.setTimestamp,
        };
      }
      case 'get': {
        return {
          json: reactions.export.bind(reactions),
          setToken: reactions.setToken,
          setChannel: reactions.setChannel,
          setFull: reactions.setFull,
          setTimestamp: reactions.setTimestamp,
        };
      }
      case 'list': {
        return {
          json: reactions.export.bind(reactions),
          setToken: reactions.setToken,
          setFull: reactions.setFull,
          setCount: reactions.setCount,
          setLimit: reactions.setLimit,
          setCursor: reactions.setCursor,
          setPage: reactions.setPage,
          setUser: reactions.setUser,
        };
      }
      default:
    }
  }
}

export const useReactions = UseReactions.fn;
