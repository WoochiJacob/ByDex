import styled from '@emotion/styled';

interface IInput {
    label: string;
    required: boolean;
    minLength: number;
    maxLength: number;
    type: string;
    register: any;
    placeholder: string;
    setValue: any;
}
function Input({
    register,
    label,
    required,
    minLength,
    maxLength,
    type,
    placeholder,
    setValue,
}: IInput) {
    const handleKeyUp = (event: any) => {
        const { value } = event.target;

        if (type === 'number') {
            setValue(label, value.replace(/[^0-9]/g, ''));
        }

        // if (value.length > maxLength) {
        //     setValue(label, value.slice(0, maxLength));
        // }
    };

    return (
        <InputStyled
            {...register(label, { required, minLength })}
            autoComplete="off"
            type={type}
            minlength={minLength}
            maxlength={maxLength}
            placeholder={placeholder}
            onKeyDown={handleKeyUp}
        />
    );
}

const InputStyled = styled.input`
    /* -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none; */
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
        /* -webkit-appearance: none; */
        margin: 0;
    }
`;

export default Input;
