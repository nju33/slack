import {useUsers} from './use-users';

describe('useUsers', () => {
  test('returns', () => {
    const {json, setName, setProfile, setUser, setValue} = useUsers();

    expect(json).toBeInstanceOf(Function);
    expect(setName).toBeInstanceOf(Function);
    expect(setProfile).toBeInstanceOf(Function);
    expect(setUser).toBeInstanceOf(Function);
    expect(setValue).toBeInstanceOf(Function);
  });
});
