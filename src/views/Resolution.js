import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Background from '../components/Background';
import Heading from '../components/Heading';
import { style } from '@mui/system';
import Container from '../components/Container';

const Overlay = styled.div`
    overflow: hidden;
    padding-bottom: 0.5rem;
`;





const Sect = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    overflow: hidden;
    flex-direction: column;
`;


const CCont = styled.div`

height:70vh;
width: 65vw;
text-align: justify;
margin-top: 50px;
border: 4px solid #3366CC;
border-radius: 10px;
padding: 10px;

`;
const Deft = styled.div`

font-family: Nunito;
font-size: 0.10rem;
line-height: 150%;
color: #284D97;

`;

const Bigt = styled(Deft)`
margin-top: 20px;
font-size: 0.25rem;

`;




function Resolution({language,setLanguage}){


return <Overlay>

<NavBar language={language} setLanguage={setLanguage}/>

{ language == 'ro' ? <>
            <Background>
          
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
            ,,Raisa Pacal"
            </Heading>
        </Container>
        </div>
                           
                          
                        
                        </Background>

                        <Sect>
                     
                            <Bigt>
                            CONCLUZII!
                                </Bigt>
                        <CCont>
                            <Deft>
                                
                            </Deft>
                        
                        </CCont>

                    
                        </Sect>


                    </>
                    :

                    <>
                    <Background>
          
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
          ,,Raisa Pacal"
          </Heading>
      </Container>
      </div>
                         
                        
                      
                      </Background>

                      <Sect>
                   
                          <Bigt>
                          CONCLUSIONS!
                              </Bigt>
                      <CCont>
                          <Deft>
                              
                          </Deft>
                      
                      </CCont>

                  
                      </Sect>
         


                    </>
}





</Overlay>





}

export default Resolution;