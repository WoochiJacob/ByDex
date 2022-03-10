import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

function Footer() {
    return (
        <Container>
            <Section>
                <Navigarion>
                    <SiteMap>
                        <Link
                            href="/"
                            passHref
                        >
                            <Logo>BY DEX</Logo>
                        </Link>

                        <TermBox>
                            <TermText>TERMS OF SERVICE</TermText>
                            <TermText>
                                PRIVACY POLICY
                            </TermText>
                        </TermBox>
                    </SiteMap>

                    <CompanyInfo>
                        <InfoBox>
                            <Title>상호명: </Title>
                            <Desc>바이덱스</Desc>
                        </InfoBox>
                        <InfoBox>
                            <Title>대표자: </Title>
                            <Desc>홍길동</Desc>
                        </InfoBox>
                        <br />
                        <InfoBox>
                            <Title>주소: </Title>
                            <Desc>서울특별시 강남구 테헤란로 000</Desc>
                        </InfoBox>
                        <br />
                        <InfoBox>
                            <Title>사업자등록번호: </Title>
                            <Desc>000-00-00000</Desc>
                        </InfoBox>
                        <InfoBox>
                            <Title>통신판매업신고: </Title>
                            <Desc>제2022-서울강남-0000호</Desc>
                        </InfoBox>

                        <InfoBox>
                            <CopyRight>COPYRIGHT ⓒ 2022 BYDEX All Rights Reserved.</CopyRight>

                        </InfoBox>
                    </CompanyInfo>
                </Navigarion>
            </Section>
        </Container>
    );
}

const Container = styled.footer`
    width: 100%;
    background: #fff;
    margin-top: auto;
    padding: 40px 20px 60px 20px;
    box-shadow: rgb(51 61 72 / 10%) 0px 4px 12px 0px;
    border-top: 1px solid #C8CDD2;
    background-color: #fff;
`;

const Section = styled.footer`
    width: 1280px;
    margin: 0 auto;
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    color: rgb(0, 5, 40);
    flex-basis: 200px;
    margin-right: 20px;
`;

const Navigarion = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CompanyInfo = styled.div``;

const InfoBox = styled.span`
    margin-right: 10px;
`;

const Title = styled.span``;

const CopyRight = styled.div`
    margin-top: 20px;
`;

const Desc = styled.span`
    font-weight: bold;
    margin-left: 4px;
`;

const SiteMap = styled.div`
    display: flex;
    flex: 1;
`;

const TermBox = styled.div`
    flex-basis: 400px;
`;

const TermText = styled.div`
    cursor: pointer;
    margin-bottom: 10px;
    

    &:hover {
        text-decoration: underline;
    }
`;

export default Footer;
