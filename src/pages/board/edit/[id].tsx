import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import { Store } from 'react-notifications-component';
import { FormData, IFormData } from '@utils/formData';
import { UserInfo, IsLogin } from '@recoil/auth/auth';

import Input from '@components/ui/Input';
import Select from '@components/ui/Select';
import TextArea from '@components/ui/TextArea';
import Radio from '@components/ui/Radio';
import Login from '@components/layout/login';

import {
    collection, addDoc, doc, setDoc,
} from 'firebase/firestore';
import { DB } from '@utils/firebase';

type BoardData = {
    category: string | undefined;
    title: string;
    price: number;
    phone: number;
    coin: string;
    contents: string;
}

function BoardNew() {
    const formData = FormData;
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);
    const userInfo = useRecoilValue(UserInfo);
    const isLogin = useRecoilValue(IsLogin);
    const {
        register, control, handleSubmit, formState: { isValid },
    } = useForm<BoardData>({
        mode: 'onChange',
    });

    const onSubmit = async (data: BoardData) => {
        setDisabled(true);

        const boardData = {
            ...data,
            user: userInfo,
            comment: [],
        };

        try {
            const querySnapshot = await addDoc(collection(DB, 'board'), boardData);

            if (querySnapshot.id) {
                await setDoc(doc(DB, 'board', querySnapshot.id), {
                    ...boardData,
                    id: querySnapshot.id,
                    created: moment().format('LLL'),
                });

                Store.addNotification({
                    title: '완료',
                    message: '게시물 작성이 완료 되었습니다.',
                    type: 'default',
                    insert: 'top',
                    container: 'top-left',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                    },
                });

                router.push('/');
                setDisabled(false);
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

    if (!isLogin) {
        return <Login />;
    }

    return (
        <Container>
            <Title>상품 등록</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {formData.map((data: IFormData) => (
                    <FormBox key={data.label}>
                        <InputTitle>{data.title}</InputTitle>

                        {data.form === 'input' && (
                            <Input
                                register={register}
                                label={data.label}
                                required={data.required}
                                minLength={data.minLength}
                                type={data.type}
                                placeholder={data.placeholder}
                            />
                        )}

                        {data.form === 'select' && (
                            <Select
                                register={register}
                                label={data.label}
                                required={data.required}
                                placeholder={data.placeholder}
                                options={data.items}
                            />
                        )}

                        {data.form === 'textarea' && (
                            <TextArea
                                register={register}
                                label={data.label}
                                required={data.required}
                                minLength={data.minLength}
                                type={data.type}
                                placeholder={data.placeholder}
                                height={200}
                            />
                        )}

                        {data.form === 'radio' && (
                            <Controller
                                name="coin"
                                control={control}
                                render={({ field }) => (
                                    <div {...field}>
                                        {data.items && data.items.map((item) => (
                                            <Radio
                                                key={item.id}
                                                register={field}
                                                name={item.name}
                                                value={item.value}
                                            />
                                        ))}
                                    </div>
                                )}
                            />
                        )}
                    </FormBox>
                ))}

                <Submit
                    type="submit"
                    value="글쓰기"
                    disabled={disabled || !isValid}
                />
            </Form>
        </Container>
    );
}

const Container = styled.div`
    width: 1280px;
    margin: 0 auto;
    padding: 120px 0;
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 50px;
`;

const InputTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Form = styled.form``;

const FormBox = styled.div`
    margin: 30px 0;
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

export default BoardNew;
