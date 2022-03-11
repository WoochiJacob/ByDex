import React from 'react';
import styled from '@emotion/styled';

function Terms() {
    return (
        <Container>
            <Title>서비스 이용 약관</Title>
            <Contents />
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    width: 1280px;
    margin: 120px auto;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const Contents = styled.div``;

export default Terms;