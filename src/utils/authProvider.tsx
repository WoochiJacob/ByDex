// authProvider.tsx
import React, { useEffect } from 'react';
import { User } from 'firebase/auth';
import {
    IsLogin,
    IsLoading,
    UserInfo,
} from '@recoil/auth/auth';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { AuthContext } from './authContext';
import { auth } from './firebase';

function AuthProvider({ children }: any) {
    const [user, setUser] = useRecoilState<User | null>(UserInfo);
    const setIsLogin = useSetRecoilState<boolean | null>(IsLogin);
    const setIsLoading = useSetRecoilState<boolean>(IsLoading);

    useEffect(() => {
        const subscribe = auth.onAuthStateChanged((fbUser) => {
            const userData = JSON.parse(JSON.stringify(fbUser));

            setIsLogin(!!fbUser);
            setIsLoading(true);
            setUser(userData);
        });
        return subscribe;
    }, [setUser, setIsLogin, setIsLoading]);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
