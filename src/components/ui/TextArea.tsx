import styled from '@emotion/styled';

interface ITextArea {
    label: string;
    required: boolean;
    minLength: number;
    type: string;
    register: any;
    placeholder: string;
    height: number;
    setValue: any;
}
function TextArea({
    register,
    label,
    required,
    minLength,
    type,
    placeholder,
    height,
    setValue,
}: ITextArea) {
    const onlyText = (event: any) => {
        const { value } = event.target;

        if (value.length === 1) {
            const newValue = value.replace(' ', '');
            setValue(label, newValue);
        }
    };

    return (
        <TextareaStyled
            {...register(label, { required, minLength })}
            autoComplete="off"
            type={type}
            minLength={minLength}
            placeholder={placeholder}
            textHeight={height}
            maxLength={3000}
            onInput={onlyText}
        />
    );
}

const TextareaStyled = styled.textarea<{textHeight: number}>`
    width: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    height: ${(props) => `${props.textHeight}px`};
    padding: 20px 15px;
    font-family: "Noto Sans KR";
    resize: none;

    &:focus, &:active, &:focus-visible {
        border: 1px solid #e6e6e6;
        outline: 0;
    }
`;

export default TextArea;
