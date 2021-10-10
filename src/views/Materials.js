import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Background from '../components/Background';
import TableRo from '../components/TableRo';
import TableEn from '../components/TableEn';


const Overlay = styled.div`
    overflow: hidden;
`;


const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 40px;
    top: 50%;

`;

const Text = styled.p`
    font-family: Nunito, sans-serif;
    font-style: italic;
    font-size: 0.12rem;
    color: #3366CC;
    width: 3rem;
    text-align: center;
`;

const Title = styled(Text)`
    font-style: none;
    font-weight: bold;
    text-align: center;
    font-size: 0.18rem;
    width: 3.38rem;
    padding-bottom: 40px;
`;


const Sect = styled.section`
    width: 100vw;
    // height: 200vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: white;
    overflow: hidden;
    flex-direction: column;
`;

const Nb = styled.div`


font-family: Lato;
font-size: 0.13rem;
line-height: 100%;
color: #3366CC;
display: flex;  

`;

const NbB = styled(Nb)`

font-weight: bold;
margin-right: 20px;

`;
 
 
function Materials({language,setLanguage}){

    return <Overlay>
                    <NavBar language={language} setLanguage={setLanguage}/>
                    { language == 'ro' ? <>
                    <Background>

                        <Cont>

                            <Title> 
                            CERINŢE PENTRU PUBLICAREA ARTICOLELOR
                            </Title>
                            <Text>
                            Stimați colegi! Vă invităm să participați la lucrările Conferinței a IX-a Naționale cu participare internațională a cadrelor didactice și elevilor din învățământul medical postsecundar și postsecundar nonterțiar cu 
                            genericul 
                            </Text>
                            <Text>
                            ,,Calitatea serviciului educațional-imperativ pentru un învățământ profesional competitiv”
                            </Text>
                        </Cont>
                    
                     </Background>

                     <Sect>
                         <TableRo> 

                         </TableRo>
                         

                        <Nb>

                        <NbB>NB! </NbB> Articolele care vor corespunde cerințelor vor fi publicate în materialele conferinței.
                        </Nb>

                    </Sect>
                    </>
                  
                :
                <>
                <Background>

                        <Cont>

                            <Title> 
                            Requirements for publishing articles
                            </Title>
                            <Text>
                            Dear Colleagues! We invite you to participate in the work of the national conference of national teachers and pupils in postsectar and post-secondary post-secondary pupils with the generic
                            </Text>
                            <Text>
                            "Quality of Educational-Imperative Service for Competitive Professional Education"
                            </Text>
                        </Cont>
                    
                     </Background>

                     <Sect>
                         <TableEn> 

                         </TableEn>
                         

                        <Nb>

                        <NbB>Note! </NbB> The Articles That Will Meet The Requirements Will Be Published in The Conference Materials.
                        </Nb>

                    </Sect>
                    </>



                       }




    </Overlay>




}

export default Materials;