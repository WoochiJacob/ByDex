import React, { useCallback } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@utils/firebase';
import Link from 'next/link';
import styled from '@emotion/styled';
import { IsLogin } from '@recoil/auth/auth';
import { useRecoilValue } from 'recoil';

import LogSvg from '@img/byswap_logo.svg';

function Header() {
    // 로그인 여부 체크
    const isLogin = useRecoilValue<boolean | null>(IsLogin);

    // 로그아웃 버튼
    const logout = useCallback(() => {
        signOut(auth);
    }, []);

    return (
        <HeaderContain>
            <Container>
                <Navigarion>
                    <Link
                        href="/"
                        passHref
                    >
                        <Logo src={LogSvg.src} />
                    </Link>
                </Navigarion>
                <UserInfo>
                    <MenuGroup>
                        {isLogin && (
                            <Menu onClick={logout}>
                                로그아웃
                            </Menu>
                        )}
                    </MenuGroup>
                </UserInfo>
            </Container>
        </HeaderContain>
    );
}

const HeaderContain = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 20px;
    position: fixed;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 9999;
    box-shadow: rgb(51 61 72 / 20%) -2px -6px 12px 0px;
    background-color: #fff;
    border-bottom: 1px solid #C8CDD2;
`;

const Container = styled.header`
    width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled('img')`
    width: 120px;
    cursor: pointer;
`;

const Navigarion = styled.div`
    display: flex;
    align-items: center;
`;

const UserInfo = styled.div``;

const MenuGroup = styled.div`
    display: flex;
    align-items: center;
`;

const Menu = styled.div`
    margin: 0 10px;
    font-size: 14px;
    cursor: pointer;
`;

export default Header;
