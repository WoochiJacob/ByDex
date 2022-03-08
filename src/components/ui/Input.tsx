import styled from '@emotion/styled';

interface IInput {
    label: string;
    required: boolean;
    minLength: number;
    type: string;
    register: any;
    placeholder: string;
}
function Input({
    register,
    label,
    required,
    minLength,
    type,
    placeholder,
}: IInput) {
    return (
        <InputStyled
            {...register(label, { required, minLength })}
            autoComplete="off"
            type={type}
            minLength={minLength}
            placeholder={placeholder}
        />
    );
}

const InputStyled = styled.input`
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    border: 1px solid #e6e6e6;
    height: 50px;
    padding: 20px 15px;
    border-radius: 8px;
    width: 100%;

    &:focus, &:active, &:focus-visible {
        border: 1px solid #e6e6e6;
        outline: 0;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default Input;
