import styled from '@emotion/styled';

interface IRadio {
    register: any;
    name: string;
    value: string
}
function Radio({
    register,
    name,
    value,
}: IRadio) {
    return (
        <RadioBox>
            <RadioHidden
                autoComplete="off"
                type="radio"
                name={name}
                value={value}
            />
            <RadioStyle checked={value === register.value} />
            {value}
        </RadioBox>
    );
}

const RadioBox = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const RadioHidden = styled.input`
    position: absolute;
    opacity: 0;
`;

const RadioStyle = styled.div<{checked : boolean}>`
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid ${(props) => (props.checked ? '#000' : '#bbb')};
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        display: ${(props) => (props.checked ? 'block' : 'none')};
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #000;
        transition: .4s ease;
    }
`;

export default Radio;
