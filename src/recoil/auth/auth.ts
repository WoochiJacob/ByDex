import { atom } from 'recoil';
import { User } from 'firebase/auth';

export const IsLogin = atom<boolean | null>({
    key: 'loginKey',
    default: null,
});

export const IsLoading = atom<boolean>({
    key: 'loadingKey',
    default: false,
});

export const UserInfo = atom<User | null>({
    key: 'userInfoKey',
    default: null,
});
