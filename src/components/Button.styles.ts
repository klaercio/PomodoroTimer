import styled, {css} from "styled-components";

interface ButtonContainerProps {
    variant: 'primary' | 'secondary' | 'danger' | 'sucess';
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger : 'red',
    sucess: 'green',
}


export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 8px;

    ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}
        `
    }}
`