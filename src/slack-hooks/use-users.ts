// tslint:disable-next-line:no-namespace
namespace UseUsers {
  export function fn(): {
    json: Users['export'];
    setName: Users['setName'];
    setProfile: Users['setProfile'];
    setUser: Users['setUser'];
    setValue: Users['setValue'];
  };

  export function fn() {
    return {
      json: users.export.bind(users),
      setName: users.setName,
      setProfile: users.setProfile,
      setUser: users.setUser,
      setValue: users.setValue,
    };
  }
}

export const useUsers = UseUsers.fn;
