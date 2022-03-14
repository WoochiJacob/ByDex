import styled from '@emotion/styled';

interface ISelectOptions {
    value: string;
    name: string;
    id: number;
}

interface ISelect {
    label: string;
    required: boolean;
    register: any;
    placeholder: string;
    options: any;
}
function Select({
    register,
    label,
    required,
    placeholder,
    options,
}: ISelect) {
    return (
        <SelectStyled
            {...register(label, { required })}
        >
            <option value="">{placeholder}</option>

            {options.map((option: ISelectOptions) => (
                <option
                    key={option.id}
                    value={option.value}
                >
                    {option.name}
                </option>
            ))}
        </SelectStyled>
    );
}

const SelectStyled = styled.select`
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    width: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    height: 50px;
    padding: 0 15px;

    &:focus, &:active, &:focus-visible {
        border: 1px solid #e6e6e6;
        outline: 0;
    }
`;

export default Select;
