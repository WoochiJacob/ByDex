import { atom } from 'recoil';

export const IsLogin = atom<boolean | null>({
    key: 'IsLogin',
    default: null,
});

export const IsLoading = atom<boolean>({
    key: 'IsLoading',
    default: false,
});
