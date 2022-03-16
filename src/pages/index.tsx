import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import {
    IsLogin,
} from '@recoil/auth/auth';

import Login from '@components/layout/login';
import {
    collection, getDocs, query, orderBy, startAfter, limit, endAt, limitToLast,
} from 'firebase/firestore';
import { DB } from '@utils/firebase';
import { Store } from 'react-notifications-component';

import Mainvisual from '@img/bySwap_background.png';

function Home() {
    const isLogin = useRecoilValue(IsLogin);
    const [paginationDisable, setPaginationDisable] = useState<boolean>(false);
    const [isBoardLoading, setIsBoardLoading] = useState(true);
    const [boardList, setBoardList] = useState<any>(null);
    const [documents, setDocument] = useState<any>(null);
    const router = useRouter();
    const pageSize = 10;
    const [currentPage, serCurrentPage] = useState<number>(1);

    const getBoard = async (event:any) => {
        try {
            let initQuery = query(collection(DB, 'board'), orderBy('price', 'desc'), limit(pageSize));

            if (event && event.target.value === 'max') {
                initQuery = query(collection(DB, 'board'), orderBy('price', 'desc'), limit(pageSize));
            } else if (event && event.target.value === 'min') {
                initQuery = query(collection(DB, 'board'), orderBy('price', 'asc'), limit(pageSize));
            } else {
                initQuery = query(collection(DB, 'board'), orderBy('created', 'desc'), limit(pageSize));
            }

            if (initQuery) {
                const documentSnapshots = await getDocs(initQuery);

                const getList = documentSnapshots.docs.map((doc) => doc.data());

                setBoardList(getList.length ? getList : null);
                setDocument(documentSnapshots.docs);
                setIsBoardLoading(false);
                serCurrentPage(1);
            }
        } catch (error) {
            Store.addNotification({
                title: '오류',
                message: '오류가 발생하였습니다.',
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
    };

    const pagination = async (action: string, item: any) => {
        try {
            let getQuery = null;
            let page = currentPage;
            if (action === 'next') {
                getQuery = query(collection(DB, 'board'), orderBy('created', 'desc'), startAfter(item), limit(pageSize));
                page += 1;
            } else {
                getQuery = query(collection(DB, 'board'), orderBy('created', 'desc'), endAt(item), limitToLast(pageSize));
                page -= 1;
            }

            if (getQuery) {
                const documentSnapshots = await getDocs(getQuery);

                if (action === 'next' && documentSnapshots.empty) {
                    return;
                }

                if (documentSnapshots.size < 10) {
                    setPaginationDisable(true);
                } else {
                    setPaginationDisable(false);
                }

                const getList = documentSnapshots.docs.map((doc) => doc.data());

                setBoardList(getList.length ? getList : null);
                setDocument(documentSnapshots.docs);
                setIsBoardLoading(false);
                serCurrentPage(page);
            }
        } catch (error) {
            Store.addNotification({
                title: '오류',
                message: '오류가 발생하였습니다.',
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
    };

    const showBoardDetail = (id: string) => {
        router.push(`/board/detail/${id}`);
    };

    const newBoard = () => {
        router.push('/board/new');
    };

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        getBoard(event);
    }, []);

    if (!isLogin) {
        return <Login />;
    }

    return (
        <Container>
            <MainvisualImage src={Mainvisual.src} />

            <Section>
                <TitleContain>
                    <Title>게시판</Title>
                    <ButtonWrap>
                        <SelectBox>
                            <Select
                                onChange={getBoard}
                            >
                                <option
                                    value=""
                                >
                                    최신순
                                </option>
                                <option value="max">고가순</option>
                                <option value="min">저가순</option>
                            </Select>
                        </SelectBox>
                        <NewBoard onClick={newBoard}>글쓰기</NewBoard>
                    </ButtonWrap>
                </TitleContain>

                <BoardGroup>
                    <BoardItems header>
                        <BoardHeader width={10}>
                            구분
                        </BoardHeader>
                        <BoardHeader width={45}>
                            제목
                        </BoardHeader>
                        <BoardHeader width={15}>
                            판매가격
                        </BoardHeader>
                        <BoardHeader width={15}>
                            작성자
                        </BoardHeader>
                        <BoardHeader width={15}>
                            작성일
                        </BoardHeader>
                    </BoardItems>
                    {boardList && boardList.map((board: any) => (
                        <BoardItems
                            key={board.id}
                            onClick={() => showBoardDetail(board.id)}
                        >
                            <BoardBody width={10}>
                                {board.category}
                            </BoardBody>
                            <BoardBody width={45}>
                                {board.title}
                            </BoardBody>
                            <BoardBody width={15}>
                                {Number(board.price).toLocaleString('ko-KR')}
                                원
                            </BoardBody>
                            <BoardBody width={15}>
                                {board.user.displayName}
                            </BoardBody>
                            <BoardBody width={15}>
                                {board.created}
                            </BoardBody>
                        </BoardItems>
                    ))}

                    {(!boardList && isBoardLoading) && (
                        <BoardEmpty>
                            게시글 불러오는중..
                        </BoardEmpty>
                    )}

                    {(!boardList && !isBoardLoading) && (
                        <BoardEmpty>
                            게시물이 없습니다.
                        </BoardEmpty>
                    )}

                </BoardGroup>
                <Pagination>
                    <PageButton
                        type="button"
                        onClick={() => pagination('prev', documents[0])}
                        disabled={currentPage === 1}
                    >
                        이전
                    </PageButton>
                    <CurrentPage>{currentPage}</CurrentPage>
                    <PageButton
                        type="button"
                        onClick={() => pagination('next', documents[documents.length - 1])}
                        disabled={paginationDisable}
                    >
                        다음
                    </PageButton>
                </Pagination>
            </Section>
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
`;

const Section = styled.section`
    width: 1280px;
    margin: 0 auto;
    margin-top: 60px;
`;

const TitleContain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 38px;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const NewBoard = styled.div`
    width: 100px;
    height: 38px;
    background-color: rgb(0, 5, 40);
    border-radius: 8px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const BoardGroup = styled.div`
    margin: 20px 0;
    box-shadow: rgb(0 8 50 / 10%) 0px 4px 16px 0px, rgb(0 0 0 / 5%) 0px -3px 0px 0px inset;
    border: 1px solid rgb(220, 223, 227);
    border-radius: 8px;
`;

const BoardItems = styled.div<{header ?: boolean}>`
    /* border-top: 1px solid #C8CDD2; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: ${(props) => (props.header ? '#eee' : '#fff')};
    
    &:last-of-type {
        border-bottom: 1px solid #C8CDD2;
    }

    cursor: pointer;

    &:hover {
        background-color: #eee ;
    }
`;

const BoardHeader = styled.div<{width: number}>`
    font-size: 14px;
    font-weight: bold;
    flex-basis: ${(props) => (`${props.width}%`)};
`;

const BoardBody = styled.div<{width: number}>`
    font-size: 14px;

    flex-basis: ${(props) => (`${props.width}%`)};
`;

const BoardEmpty = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    border-top: 1px solid #C8CDD2;
    border-bottom: 1px solid #C8CDD2;
`;

const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

const PageButton = styled.button`
    border: 0;
    background-color: rgb(0, 5, 40);
    height: 38px;
    width: 100px;
    border-radius: 8px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:disabled {
        background-color: #C8CDD2;
    }
`;

const CurrentPage = styled.div`
    font-size: 16px;
    margin: 0 20px;
    font-weight: bold;
`;

const MainvisualImage = styled('img')`
    width: 100%;
`;

const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
`;

const SelectBox = styled.div`
    margin-right: 20px;
    
`;

const Select = styled.select`
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    width: 150px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    height: 38px;
    padding: 0 15px;

    &:focus, &:active, &:focus-visible {
        border: 1px solid #e6e6e6;
        outline: 0;
    }
`;

export default Home;
