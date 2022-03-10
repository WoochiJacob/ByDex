import React from 'react';
import styled from '@emotion/styled';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { IsLoading } from '@recoil/auth/auth';
import { useRecoilValue } from 'recoil';

// Components
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

interface ILayouts {
    children: React.ReactNode;
}

function Layouts({ children }: ILayouts) {
    const isLoading = useRecoilValue<boolean>(IsLoading);

    if (!isLoading) return <div />;

    return (
        <LayoutBlock>
            {/* 알림 */}
            <ReactNotifications />

            {/* 헤더 */}
            <Header />

            {/* 컨텐츠 */}
            {children}

            {/* 푸터 */}
            <Footer />
        </LayoutBlock>
    );
}

const LayoutBlock = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 80px;
`;

export default Layouts;
