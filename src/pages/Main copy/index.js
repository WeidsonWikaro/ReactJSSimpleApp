import React from 'react';

import { Title, Subtitle } from './styles';

function Main() {
    return (
        <>
            <Title>
                Main
                <p>mainpage</p>
            </Title>
            <Subtitle>MainSub</Subtitle>
            <p>
                <Subtitle selected>MainSub</Subtitle>
            </p>
        </>
    );
}

export default Main;
