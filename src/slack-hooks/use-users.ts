import {Users} from '../structs/slack/users';

type UsersType = 'profile';

// tslint:disable-next-line:no-namespace
namespace UseUsers {
  export function fn(
    type: UsersType,
  ): {
    json: Users['export'];
    setName: Users['setName'];
    setProfile: Users['setProfile'];
    setUser: Users['setUser'];
    setValue: Users['setValue'];
  };

  export function fn(type: UsersType) {
    const users = new Users();

    switch (type) {
      case 'profile': {
        return {
          json: users.export.bind(users),
          setName: users.setName,
          setProfile: users.setProfile,
          setUser: users.setUser,
          setValue: users.setValue,
        };
      }
      default: {
        return {};
      }
    }
  }
}

export const useUsers = UseUsers.fn;
