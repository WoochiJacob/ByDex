import { useCallback } from 'react';
import styled from '@emotion/styled';
import {
    signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '@utils/firebase';
import { Store } from 'react-notifications-component';

function Login() {
    const googleLogin = useCallback(async (type: string) => {
        const provider = getLoginProvider(type);

        if (!provider) {
            return;
        }

        try {
            const data = await signInWithPopup(auth, provider);

            if (data) {
                Store.addNotification({
                    title: '로그인 완료',
                    message: '로그인이 완료되었습니다.',
                    type: 'default',
                    insert: 'top',
                    container: 'top-left',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                    },
                });
            }
        } catch (error) {
            Store.addNotification({
                title: '오류',
                message: '로그인 정보를 다시 확인해주세요.',
                type: 'danger',
                insert: 'top',
                container: 'top-left',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                },
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getLoginProvider = useCallback((type: string) => {
        let provider = null;

        if (type === 'google') {
            provider = new GoogleAuthProvider();
        }

        return provider;
    }, []);

    return (
        <Container>
            <Title>로그인</Title>
            <Button
                type="button"
                onClick={() => googleLogin('google')}
            >
                구글 로그인
            </Button>
        </Container>
    );
}

const Container = styled.div`
    width: 600px;
    margin: 0 auto;
    padding-top: 120px;
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 50px;
`;

const Button = styled.button`
    font-size: 16px;
    margin-bottom: 10px;
`;

export default Login;
