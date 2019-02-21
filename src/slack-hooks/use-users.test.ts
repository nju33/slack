import {useUsers} from './use-users';

describe('useUsers', () => {
  test('returns', () => {
    const {json, setName, setProfile, setUser, setValue} = useUsers('profile');

    expect(json).toBeInstanceOf(Function);
    expect(setName).toBeInstanceOf(Function);
    expect(setProfile).toBeInstanceOf(Function);
    expect(setUser).toBeInstanceOf(Function);
    expect(setValue).toBeInstanceOf(Function);

    setName('foo');
    setUser('A');
    setValue('yes');

    const result: any = json(false);
    expect(result.name).toBe('foo');
    expect(result.user).toBe('A');
    expect(result.value).toBe('yes');
  });
});
