import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';

import Background from '../components/Background';
import Container from '../components/Container';
import Heading from '../components/Heading';
import LandingButton from '../components/LandingButton'

import EnSVG from '../assets/en.svg';
import RoSVG from '../assets/ro.svg';

export const LanguageBar = styled.div`
    display: flex;
    width: 0.4rem;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;

export const IMG = styled.div`
    display: block;
    background-image: url(${props => props.imgSrc});
    background-size: contain;
    background-repeat: no-repeat;
    width: 0.16rem;
    height: 0.16rem;
    border-radius: 0.05rem;
    cursor: pointer;
`;




function LandingPage({language, setLanguage}) {

    const history = useHistory();

    const handleClick = () => {
        history.push('/about');
    }

    const handleLangRoChange = () => {
        setLanguage('ro');
        localStorage.setItem('lang', 'ro');
    }

    const handleLangEnChange = () => {
        setLanguage('en');
        localStorage.setItem('lang', 'en');
    }


    return <Background style={{overflow: 'hidden'}}>
        <LanguageBar>
            <IMG 
                imgSrc={EnSVG} 
                onClick={handleLangEnChange}/>
            <IMG 
                imgSrc={RoSVG}
                onClick={handleLangRoChange}/>

        </LanguageBar>

        <div style={{position: 'absolute', right: '48px', top: '35%',}}>
        <Container>
            <Heading 
                fZ='1rem'
                fW='bold'>
                CEMF
            </Heading>
            <Heading
                fZ='0.5rem'
                fW='normal'>
                "Raisa Pacalo"
            </Heading>
            {
                language == 'ro' ?  <LandingButton
                                        onClick={handleClick}>
                                        сătre website
                                    </LandingButton> :

                                     <LandingButton
                                        onClick={handleClick}>
                                        to the website
                                    </LandingButton>
            }
        </Container>
        </div>
    </Background>
}

export default LandingPage;