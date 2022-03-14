import {
    useEffect, useState, useCallback,
} from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import moment from 'moment';
import 'moment/locale/ko';
import {
    getDoc, doc, setDoc, deleteDoc,
} from 'firebase/firestore';
import { DB } from '@utils/firebase';
import TextArea from '@components/ui/TextArea';
import { useForm } from 'react-hook-form';
import { Store } from 'react-notifications-component';
import { UserInfo, IsLogin } from '@recoil/auth/auth';
import Login from '@components/layout/login';

type CommnetData = {
    commnet: string;
}

function BoardDetail() {
    const router = useRouter();
    const boardId = String(router.query.id);
    const [isBoardLoading, setIsBoardLoading] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const userInfo = useRecoilValue(UserInfo);
    const isLogin = useRecoilValue(IsLogin);
    const [boardList, setBoardList] = useState<any>(null);
    const [deleteDisable, setDeleteDisable] = useState<boolean>(false);
    const [isMine, setMine] = useState<string>('');
    const [showTooltip, setShowTooltip] = useState<boolean>(false);
    const {
        register, handleSubmit, setValue, formState: { isValid },
    } = useForm<CommnetData>({
        mode: 'onChange',
    });

    const boardModify = async (action: string) => {
        if (action === 'modify') {
            router.push(`/board/edit/${boardId}`);
            return;
        }
        setDeleteDisable(true);
        try {
            await deleteDoc(doc(DB, 'board', boardList.id));

            router.push('/');
            setDeleteDisable(false);

            Store.addNotification({
                title: '완료',
                message: '게시물이 삭제되었습니다.',
                type: 'default',
                insert: 'top',
                container: 'top-left',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                },
            });
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

    const showPhoneNumber = (action: string) => {
        const isShow = !!(action === 'over');
        setShowTooltip(isShow);
    };

    const onSubmit = async (data: CommnetData) => {
        setDisabled(true);

        const newComment = {
            user: userInfo,
            ...data,
            created: moment().format('LLL'),
        };

        const commentData = boardList.comment.concat(newComment);
        try {
            await setDoc(doc(DB, 'board', boardId), {
                ...boardList,
                comment: commentData,
            });

            await getBoard(false);

            Store.addNotification({
                title: '댓글작성 완료',
                message: '댓글작성이 완료 되었습니다.',
                type: 'default',
                insert: 'top',
                container: 'top-left',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                },
            });

            setValue('commnet', '');
            setDisabled(false);
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

    const getBoard = useCallback(async (action: boolean) => {
        try {
            const docRef = doc(DB, 'board', boardId);
            const docSnap = await getDoc(docRef);
            const getList = docSnap.data() || null;

            if (!getList) {
                router.push('/');
                Store.addNotification({
                    title: '오류',
                    message: '게시물 정보가 없습니다.',
                    type: 'danger',
                    insert: 'top',
                    container: 'top-left',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                    },
                });

                return;
            }

            setBoardList(getList);

            if (action) {
                setIsBoardLoading(false);
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
    }, [boardId, router]);

    const nl2br = (str: string) => str.replace(/\n/g, '<br />');

    useEffect(() => {
        getBoard(true);
    }, [getBoard]);

    useEffect(() => {
        if (userInfo) {
            setMine(userInfo.uid);
        }
    }, [userInfo]);

    if (!isLogin) {
        return <Login />;
    }

    if (isBoardLoading) {
        return (
            <Container>
                <Loadings>불러오는중...</Loadings>
            </Container>
        );
    }

    return (
        <Container>
            <BoradTitle>
                {boardList.title}
                {isMine === boardList.user.uid && (
                    <ModifyButton>
                        <DeleteButton
                            onClick={() => boardModify('modify')}
                        >
                            게시물 수정
                        </DeleteButton>

                        <DeleteButton
                            onClick={() => boardModify('delete')}
                            disabled={deleteDisable}
                        >
                            게시물 삭제
                        </DeleteButton>
                    </ModifyButton>
                )}

            </BoradTitle>
            <BoradCategory>
                {boardList.category}
                {' '}
                /
                {' '}
                {boardList.created}
            </BoradCategory>

            <BoardFlex>
                <BoardBox width={60}>
                    <BoardBoxTitle>상품 소개</BoardBoxTitle>
                    <TextDetail dangerouslySetInnerHTML={{ __html: nl2br(boardList.contents) }} />
                </BoardBox>
                <BoardBox width={40}>
                    <BoardDetailBox>
                        <BoardCoin>
                            <BoardBoxTitle>구매가능 코인</BoardBoxTitle>
                            <Coin>{boardList.coin}</Coin>
                        </BoardCoin>

                        <BoardCoin>
                            <BoardBoxTitle>가격</BoardBoxTitle>
                            <Price>
                                {Number(boardList.price).toLocaleString('ko-KR')}
                                원
                            </Price>
                        </BoardCoin>
                    </BoardDetailBox>

                    <UserProfile>
                        <UserProfileDetailBox>
                            <Profile src={boardList.user.photoURL} />
                            <UserName>{boardList.user.displayName}</UserName>
                            <UserMail>{boardList.user.email}</UserMail>
                            <UserNumberCheck
                                onMouseOver={() => showPhoneNumber('over')}
                                onMouseLeave={() => showPhoneNumber('leave')}
                            >
                                연락처 확인하기
                                {showTooltip && <UserToolTip>{boardList.phone}</UserToolTip>}
                            </UserNumberCheck>
                        </UserProfileDetailBox>
                    </UserProfile>
                </BoardBox>
            </BoardFlex>
            <BoardBox width={100}>
                <BoardBoxTitle>댓글</BoardBoxTitle>
                <BoardCommentList>
                    {!!boardList.comment.length && boardList.comment.map((comment: any, index: number) => (
                        <BoardCommentItems key={`${comment.created}-${index}`}>
                            <CommentUser>
                                <CommentUserProfile src={comment.user.photoURL} />
                                <CommentUserName>{comment.user.displayName}</CommentUserName>
                            </CommentUser>
                            <Comment>
                                {comment.commnet}
                            </Comment>
                            <CommentTime>{comment.created}</CommentTime>
                        </BoardCommentItems>
                    ))}

                    {!boardList.comment.length && '등록된 댓들이 없습니다.'}

                </BoardCommentList>
                <CommentInput>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <TextAreaBox>
                            <TextArea
                                register={register}
                                label="commnet"
                                required
                                minLength={5}
                                type="text"
                                placeholder="내용을 적어주세요."
                                height={100}
                                setValue={setValue}
                            />
                        </TextAreaBox>

                        <Submit
                            type="submit"
                            value="댓글 쓰기"
                            disabled={disabled || !isValid}
                        />
                    </Form>
                </CommentInput>
            </BoardBox>
        </Container>
    );
}

const Container = styled.section`
    width: 1280px;
    margin: 60px auto 120px auto;
`;

const BoradTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BoradCategory = styled.div`
    font-size: 14px;
    color: #aaa;
    margin-top: 5px;
`;

const Loadings = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BoardBox = styled.div<{width: number}>`
    flex-basis: ${(props) => `calc(${props.width}% - 20px)`};
    background-color: rgb(255, 255, 255);
    padding: 40px;
    margin-top: 40px;
    border-radius: 8px;
    box-shadow: rgb(0 8 50 / 10%) 0px 4px 16px 0px, rgb(0 0 0 / 5%) 0px -3px 0px 0px inset;
    border: 1px solid rgb(220, 223, 227);
`;

const BoardFlex = styled.div`
    display: flex;
    justify-content: space-between;
`;

const UserProfileDetailBox = styled.div`
    text-align: center;
`;

const BoardDetailBox = styled.div`
    flex-basis: 33.33%;
`;

const UserNumberCheck = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    background-color: rgb(0, 5, 40);
    width: 300px;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
    position: relative;
`;

const UserProfile = styled.div`
    flex-basis: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    padding-top: 30px;
    max-height: 500px;
    border-top: 1px solid #C8CDD2;
`;

const Profile = styled('img')`
    width: 80px;
    border-radius: 50%;
    border-right: 1px solid #C8CDD2;
    box-shadow: rgb(0 8 50 / 10%) 0px 4px 16px 0px, rgb(0 0 0 / 5%) 0px -3px 0px 0px inset;
`;

const UserName = styled.div`
    font-weight: bold;
    margin-top: 10px;
`;

const UserMail = styled.div`
margin-top: 5px;
`;

const BoardCoin = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const BoardBoxTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    flex-basis: 100px;
    margin-right: 20px;
`;

const Coin = styled.div`
    font-size: 18px;
`;

const Price = styled.div`
    font-size: 20px; 
    color: rgb(53, 68, 180);
    font-weight: 900;
    word-break: break-all;
`;

const TextDetail = styled.div`
    width: 100%;
    font-size: 14px;
    line-height: 1.5;
    word-break: break-all;
    margin-top: 20px;
    min-height: 300px;
`;

const Form = styled.form`
    display: flex;
    justify-content: space-between;
`;

const Submit = styled.input`
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    height: 50px;
    flex-basis: 250px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    background-color: rgb(0, 5, 40);
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus, &:active, &:focus-visible {
        border: 1px solid #e6e6e6;
        outline: 0;
    }

    &:disabled {
        background: #e6e6e6;
        cursor: not-allowed
    }
`;

const CommentInput = styled.div`
    margin-top: 40px;
`;

const TextAreaBox = styled.div`
    flex-basis: calc(100% - 270px);
`;

const BoardCommentList = styled.div`
    margin-top: 20px;
`;

const BoardCommentItems = styled.div`
    border-top: 1px solid #ededed;
    padding: 20px 10px;

    &:hover {
        background-color: #FAFAFA ;
    }
`;

const CommentUser = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const CommentUserProfile = styled('img')`
    width: 20px;
    border-radius: 50%;
    border: 1px solid #C8CDD2;
    margin-right: 4px;
`;

const CommentUserName = styled.div`
    font-size: 12px;
`;

const Comment = styled.div`
    font-size: 14px;
    word-break: break-all;
`;

const CommentTime = styled.div`
    font-size: 12px;
    color: #C8CDD2;
    margin-top: 10px;
`;

const DeleteButton = styled.button`
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
    margin-left: 20px;

    &:first-of-type {
        background-color: #fff;
        border: 1px solid #C8CDD2;
        color: rgb(0, 5, 40)
    }

    &:disabled {
        background-color: #C8CDD2;
    }
`;

const ModifyButton = styled.div`
    display: flex;
    align-items: center;
`;

const UserToolTip = styled.div`
    position: absolute;
    background-color: #fff;
    color: rgb(0, 5, 40);
    border: 1px solid #C8CDD2;
    width: 200px;
    border-radius: 8px;
    height: 30px;
    top: -40px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default BoardDetail;
