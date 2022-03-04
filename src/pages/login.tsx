import { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@utils/firebase';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { Store } from 'react-notifications-component';

type LoginData = {
    userId: string;
    userPassword: string;
    code: string;
}

function Login() {
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);
    const {
        register, handleSubmit, formState: { errors },
    } = useForm<LoginData>({
        mode: 'onChange',
    });

    const onSubmit = async (data: LoginData) => {
        setDisabled(true);
        if (process.env.JOIN_SECRET_CODE === data.code) {
            try {
                const getJoin = await signInWithEmailAndPassword(auth, data.userId, data.userPassword);

                if (getJoin) {
                    await router.push('/');

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
                    title: '로그인 오류',
                    message: '로그인에 실패하였습니다.',
                    type: 'danger',
                    insert: 'top',
                    container: 'top-left',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                    },
                });

                setDisabled(false);
                return;
            }
            return;
        }

        Store.addNotification({
            title: '코드오류',
            message: '코드를 다시 확인 해주세요.',
            type: 'danger',
            insert: 'top',
            container: 'top-left',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
                duration: 5000,
            },
        });
        setDisabled(false);
    };

    return (
        <Container>
            <Title>로그인</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputTitle>아이디</InputTitle>
                <Input
                    type="text"
                    placeholder="아이디를 입력하세요."
                    autoComplete="off"
                    {...register('userId', {
                        required: true,
                        pattern: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
                        minLength: 5,
                    })}
                />
                {errors.userId?.type === 'required' && <Error>아이디를 입력해주세요.</Error>}
                {errors.userId?.type === 'pattern' && <Error>이메일 형식에 맞게 입력해주세요.</Error>}
                <InputTitle>비밀 번호</InputTitle>
                <Input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    autoComplete="off"
                    {...register('userPassword', { required: true, minLength: 5 })}
                />

                {errors.userPassword && <Error>비밀번호를 입력해주세요.</Error>}
                <InputTitle>코드 입력</InputTitle>
                <Input
                    type="password"
                    placeholder="코드를 입력하세요."
                    autoComplete="off"
                    {...register('code', { required: true, minLength: 5 })}
                />
                {errors.code && <Error>코드를 입력해주세요.</Error>}

                <Submit
                    type="submit"
                    value="로그인"
                    disabled={disabled}
                />
            </form>
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

const InputTitle = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
`;

const Error = styled.div`
    font-size: 12px;
    color: #f56c6c;
    margin-bottom: 20px;
`;

const Input = styled.input`
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    border: 1px solid #e6e6e6;
    height: 50px;
    padding: 20px 15px;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 5px;

    &:focus, &:active, &:focus-visible {
        border: 1px solid #e6e6e6;
        outline: 0;
    }
`;

const Submit = styled.input`
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    height: 50px;
    width: 100%;
    border: 1px solid #e6e6e6;
    margin: 20px 0;
    border-radius: 8px;
    background-color: rgb(0, 5, 40);
    color: #fff;
    font-size: 16px;
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

export default Login;
