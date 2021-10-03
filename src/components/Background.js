import React from 'react';
import styled from 'styled-components';

import backgroundUemf from '../assets/background-uemf.png'

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundUemf});
    background-size: cover;
    background-repeat: no-repeat;
`;


export default Background;