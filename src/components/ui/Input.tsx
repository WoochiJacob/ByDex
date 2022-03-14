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

        if (label === 'price' || label === 'phone') {
            const rgex = /[^0-9.]/g;
            const newValue = value.replace(rgex, '');
            setValue(label, newValue);
        }

        if (value.length === 1) {
            const newValue = value.replace(' ', '');
            setValue(label, newValue);
        }
    };

    return (
        <InputStyled
            {...register(label, { required, minLength, maxLength })}
            autoComplete="off"
            type={type}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            onInput={handleKeyUp}
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
