import { useCallback } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
    signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider,
} from 'firebase/auth';
import { auth } from '@utils/firebase';

function Home() {
    const googleLogin = useCallback(async () => {
        const provider = new GoogleAuthProvider();

        const data = await signInWithPopup(auth, provider);
        console.log(data);
    }, []);
    return (
        <Container>
            <Section>
                <Button
                    type="button"
                    onClick={googleLogin}
                >
                    구글 로그인
                </Button>
            </Section>
        </Container>
    );
}

const Container = styled.section`
    width: 1280px;
    margin: 0 auto;
`;

const Section = styled.section`
    margin-top: 60px;
`;

const Button = styled.button``;

export default Home;
