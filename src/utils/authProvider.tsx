// authProvider.tsx
import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { IsLogin, IsLoading } from '@recoil/auth/auth';
import { useSetRecoilState } from 'recoil';
import { AuthContext } from './authContext';
import { auth } from './firebase';

function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null);
    const setIsLogin = useSetRecoilState<boolean | null>(IsLogin);
    const setIsLoading = useSetRecoilState<boolean>(IsLoading);

    useEffect(() => {
        const subscribe = auth.onAuthStateChanged((fbUser) => {
            setIsLogin(!!fbUser);
            setIsLoading(true);
            setUser(fbUser);
        });
        return subscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
