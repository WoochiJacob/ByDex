// next 기본 기능
import type { AppProps } from 'next/app';
// styled Component Global
import { Global } from '@emotion/react';
// Recoil 시작
import { RecoilRoot } from 'recoil';

// Components
import AuthProvider from '@utils/authProvider';
import Layouts from '@components/layout/Layouts';
import globalStyles from '@styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <AuthProvider>
                <Layouts>
                    <Global styles={[globalStyles]} />
                    <Component {...pageProps} />
                </Layouts>
            </AuthProvider>
        </RecoilRoot>
    );
}

export default MyApp;
