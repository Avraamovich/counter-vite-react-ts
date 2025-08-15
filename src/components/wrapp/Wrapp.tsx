import styled from "styled-components";

type WrappProps = {
    displayOn?: boolean;
}

export const Wrapp = styled.div<WrappProps>`
    width: 480px;
    height: 240px;
    border: 1px solid white;
    border-radius: 15px;
    
    display: ${props => props.displayOn ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`