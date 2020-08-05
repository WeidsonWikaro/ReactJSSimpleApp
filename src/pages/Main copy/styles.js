import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 24px;
    color: #ffffff;

    p {
        font-size: 15px;
    }
`;

export const Subtitle = styled.span`
    font-size: 14px;
    color: ${(props) => (props.selected ? 'red' : '#FFFFFF')};
    font-family: Arial, Helvetica, sans-serif;
`;
