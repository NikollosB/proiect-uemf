import React from 'react';
import {useHistory, useLocation, Link} from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import EnSVG from '../assets/en.svg';
import RoSVG from '../assets/ro.svg';
import {IMG} from '../views/LandingPage';


const MenuText = styled(Typography)`
     font-family: Ubuntu, sans-serif;
     font-size: 16px;
     text-transform: capitalize;
     cursor: pointer;
     letter-spacing: 0;
     margin: auto 12px;

`;

const MenuItem = styled(Button)`
     font-family: Ubuntu, sans-serif;
     font-size: 18px;
     cursor: pointer;
`;

const MenuItemIMG = styled(MenuItem)`
    margin: 0;
`;

const MenuToolbar = styled(Toolbar)`
    height: 0.33rem;
    width: 6rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CustomIMG = styled(IMG)`
    border-radius: 50%;
    width: 20px;
    height: 20px;
`;

function NavBar({language, setLanguage}) {

    const history = useHistory();
    const location = useLocation();

    const handleLangRoChange = () => {
        setLanguage('ro');
        localStorage.setItem('lang', 'ro');
    }

    const handleLangEnChange = () => {
        setLanguage('en');
        localStorage.setItem('lang', 'en');
    }

  return (
      <AppBar position="fixed" sx={{height: '64px'}}>
        {language == 'ro' ? <MenuToolbar>
          <MenuItem 
             color="inherit"
             onClick={() => history.push('/about')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/about' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Despre
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/greeting')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/greeting' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Salut
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/conference')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/conference' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Conferinţă
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/register')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/register' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Înregistrare
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/partners')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/partners' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Parteneri
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/materials')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/materials' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Materiale
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/resolution')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/resolution' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Rezoluţie
                </MenuText>
          </MenuItem>

            <Container>
              <MenuItemIMG
                color='inherit'
                onClick={handleLangEnChange}>
                <CustomIMG 
                    imgSrc={EnSVG} />
                </MenuItemIMG>

              <MenuItemIMG
                color='inherit'
                onClick={handleLangRoChange}>
                <CustomIMG 
                    imgSrc={RoSVG}/>
              </MenuItemIMG>
              </Container>

        </MenuToolbar> :

        <MenuToolbar>
          <MenuItem 
             color="inherit"
             onClick={() => history.push('/about')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/about' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    About
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/greeting')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/greeting' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Greeting
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/conference')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/conference' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Conference
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/register')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/register' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Register
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/partners')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/partners' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Partners
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/materials')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/materials' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Materials
                </MenuText>
          </MenuItem>

          <MenuItem 
             color="inherit"
             onClick={() => history.push('/resolution')}>
                <MenuText
                    variant='p'
                    sx={location.pathname == '/resolution' ? {borderTop: '2px solid white'} : {borderTop: 'none'}}>
                    Resolution
                </MenuText>
          </MenuItem>

            <Container>
              <MenuItemIMG
                color='inherit'
                onClick={handleLangEnChange}>
                <CustomIMG 
                    imgSrc={EnSVG} />
                </MenuItemIMG>

              <MenuItemIMG
                color='inherit'
                onClick={handleLangRoChange}>
                <CustomIMG 
                    imgSrc={RoSVG}/>
              </MenuItemIMG>
              </Container>

  </MenuToolbar> }
      </AppBar>
  );
}


export default NavBar;