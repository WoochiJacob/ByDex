import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import { Store } from 'react-notifications-component';
import { FormData } from '@utils/formData';

import Input from '@components/ui/Input';
import Select from '@components/ui/Select';
import TextArea from '@components/ui/TextArea';
import Radio from '@components/ui/Radio';

import {
    collection, addDoc, getDocs,
} from 'firebase/firestore';
import { DB } from '@utils/firebase';

type BoardData = {
    category: string;
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
    const {
        register, control, handleSubmit, formState: { errors },
    } = useForm<BoardData>({
        mode: 'onChange',
    });

    const onSubmit = async (data: BoardData) => {
        setDisabled(true);
        try {
            const querySnapshot = await addDoc(collection(DB, 'board'), data);

            if (querySnapshot.id) {
                console.log(querySnapshot.id);

                console.log('fasdfadws');
                // router.push('/');
                setDisabled(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const test = async () => {
        const querySnapshotttttt = await getDocs(collection(DB, 'board'));

        console.log(querySnapshotttttt);
    };

    useEffect(() => {
        test();
    }, []);

    return (
        <Container>
            <Title>상품 등록</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {formData.map((data) => (
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
                    disabled={disabled}
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

const Error = styled.div`
    font-size: 12px;
    color: #f56c6c;
    margin-bottom: 20px;
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
