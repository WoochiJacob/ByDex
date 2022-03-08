import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import {
    IsLogin,
} from '@recoil/auth/auth';

import Login from '@components/layout/login';
import { collection, addDoc } from 'firebase/firestore';
import { DB } from '@utils/firebase';

function Home() {
    const isLogin = useRecoilValue(IsLogin);

    const test = async () => {
        // try {
        //     const querySnapshot = await addDoc(collection(DB, 'board'), {
        //         title: '제목',
        //         contents: 'ddd',
        //         날짜: 'ddd',
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
    };

    useEffect(() => {
        test();
    });

    if (!isLogin) {
        return <Login />;
    }

    return (
        <Container>
            <Section>
                <Title>게시판</Title>
                <BoardGroup>
                    <BoardItems>fksdafjkl;asdjf;</BoardItems>
                    <BoardItems>fksdafjkl;asdjf;</BoardItems>
                    <BoardItems>fksdafjkl;asdjf;</BoardItems>
                    <BoardItems>fksdafjkl;asdjf;</BoardItems>
                    <BoardItems>fksdafjkl;asdjf;</BoardItems>
                </BoardGroup>
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

const Title = styled.div``;

const BoardGroup = styled.div`
    margin: 20px 0;
`;

const BoardItems = styled.div`
    padding: 20px 15px;
    border-top: 1px solid #e6e6e6;
    cursor: pointer;
    
    &:hover {
        background-color: #eee ;
    }

    &:last-of-type {
        border-bottom: 1px solid #e6e6e6;
    }
`;

export default Home;
