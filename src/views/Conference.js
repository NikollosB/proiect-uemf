import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Background from '../components/Background';
import { style } from '@mui/system';

const Overlay = styled.div`
    overflow: hidden;
    padding-bottom: 0.5rem;
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
    font-size: 0.18rem;
    color: #3366CC;
    width: 3.68rem;
    text-align: center;
    line-height: 49px;
`;

const Sect = styled.section`
    width: 100vw;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    overflow: hidden;
    flex-direction: column;
`;

const Sect2 = styled(Sect)`
   
    // height: 140vh;
    
`;
const CCont = styled.div`

width: 65vw;
text-align: center;
margin-top: 50px;

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

const Medt = styled(Deft)`

font-size: 0.14rem;
margin-bottom: 50px;
`;

const Datt = styled(Deft)`

font-size: 0.12rem;
margin-bottom: 20px;

`;

const Bolt = styled(Deft)`

font-weight: bold;
margin-right:20px;

`;

const Deftm = styled(Deft)`

margin-left:40px;

`;

const Rdiv = styled.div`
text-align: left;
margin-bottom: 20px;
`;

const Fl = styled.div`
display:flex;

`;

const Ul = styled.ul`

margin-top: 20px;
margin-bottom: 20px;

`;

const Li = styled.li`
font-family: Nunito;
font-size: 0.10rem;
line-height: 150%;
color: #284D97;

`;


function Conference({language,setLanguage}){


return <Overlay>

<NavBar language={language} setLanguage={setLanguage}/>

{ language == 'ro' ? <>
            <Background>

                        <Cont>
                            
                            <Text>
                            Conferința a IX-a națională cu participare internațională  a  cadrelor  didactice  și  a elevilor din  învățământul medical postsecundar și postsecundar nonterțiar
                            </Text>
                          
                        </Cont>
                        </Background>

                        <Sect>
                     
                            <Bigt>
                            STIMAȚI PARTENERI!
                                </Bigt>
                        <CCont>
                            <Deft>
                       
                            Pentru început vă adresăm ,,Bine ați Venit!” la cea de a IX-a Conferință Națională cu participare internațională a cadrelor didactice și elevilor din învățământul medical postsecundar și postsecundar nontețiar, (Chișinău, CEMF ,,Raisa Pacalo” 18-19 noiembrie 2021).

                            </Deft>
                            <Deft>
                            Conferința a IX-a cu genericul  „Calitatea serviciului educațional – imperativ pentru un învățământ profesional competitiv”  este organizată de Centrul de excelență în medicină și farmacie ,,Raisa Pacalo” și se înscrie în șirul manifestărilor științifice de anvergură, care se organizează în instituția noastră, începând cu anul 2004, când a avut loc prima Conferință de acest gen. În cadrul acestor conferințe bianuale sunt puse în valoare rezultatele investigațiilor întreprinse de către profesori,  privind diverse aspecte ale didacticii actualizate, cu abordarea unor varietăți de probleme și soluții inovative, precum și o serie de recomandări pertinente, care eficientizează procesul de formare profesională a viitorului specialist medical.

                           
                       </Deft>
                       <Deft>
                       
                       Organizarea celei de a IX-a ediții a Conferinței este un moment important, deoarece reprezintă un eveniment științific de referință pentru profesioniștii din domeniul învățământului profesional medical. În cadrul acestei activități, care se va desfășura în regim online, se vor aborda aspecte ale învățământului profesional tehnic în contextul modernizării și dezvoltării lui durabile, precum și dezvoltarea, promovarea valențelor și priorităților învățământului medical din țară și de peste hotare.

                       </Deft>
                       <Deft>
                       Evenimentul va întruni reprezentanți ai mediului academic, cercetători, cadre didactice, elevi, manageri ai instituțiilor de învățământ și reprezentanți ai instituțiilor medico-sanitare publice și private din Republica Moldova și de peste hotare.

                           
                       </Deft>
                       <Deft>
                       
                           
        Materialele vor fi publicate în Culegerea de materiale ale Conferinței a IX-a Naționale cu participare internațională  a cadrelor didactice și elevilor din învățământul medical postsecundar și postsecundar nonterțiar.
       Totodată, lansăm invitația pentru participare cu articole și prezentări pentru toate cadrele didactice și elevi din colegiile de medicină și din alte instituții din învățământul profesional tehnic din țară. Așteptăm materialele Dumneavoastră pentru publicare până la 20 octombrie 2021, la adresa conferinta2021cemf@gmail.com
       
                       </Deft>
                       <Deft>
                       Tuturor participanților la această Conferință le adresăm salutări colegiale.

                           
                       </Deft>
                        </CCont>

                    
                        </Sect>

                        <Sect2>

                            <CCont>

                                <Medt>
                                GENERICUL: CALITATEA  SERVICIULUI  EDUCAȚIONAL – IMPERATIV  PENTRU  UN ÎNVĂȚĂMÂNT  PROFESIONAL  COMPETITIV
                                </Medt>
                                <Datt>
                                JOI, 18 NOIEMBRIE, 2021
                                </Datt>
                                <Rdiv>
                                    <Fl>
                                    <Bolt>
                                    12.00 – 12.30 :
                                    </Bolt>
                                    <Deft>
                                    Deschiderea conferinței
                                    </Deft>
                                    </Fl>
                                    <Bolt>
                                    12.30 – 17.30 :
                                    </Bolt>
                                    <Deft>
                                    Sesiunea I – Program științific (rapoarte în plen) partenerii internaționali (România, Franța, Ucraina)
                                    </Deft>
                                    <Deft>
                                    Sesiunea II – Program științific (rapoarte în plen) partenerii naționali (USMF „N.Testemițanu”, UST, USM, USP „Ion Creangă”)
                                    </Deft>
                                    <Deft>
                                    Sesiunea III – Program științific (rapoarte în plen) organizatorii   
                                    </Deft>
                                </Rdiv>

                                <Datt>
                                VINERI 19 NOIEMBRIE, 2021
                                </Datt>

                                <Rdiv>

                                <Fl>
                                    <Bolt>
                                    09.00 – 11.00 :
                                    </Bolt>
                                    <Deft>
                                    Sesiunea a II-a – Activități în secțiuni. 
                                    </Deft>
                                    </Fl>
                                </Rdiv>

                                <Rdiv>
                                    
                                <Deft>
                                    Secțiunile :
                                    </Deft>


                                    <Ul>

                                    <Li>
                                    Limbi de comunicare
             <Deftm> Moderator: Elena Catărău</Deftm>
                                    </Li>

                                    <Li>
                                    Discipline socio-umane și reale
                                    <Deftm> Moderatori: Tatiana Dumitraș &
                                         Nina Mardari</Deftm>
                                    </Li>

                                    <Li>

                                    Nursing
                                        <Deftm>
                                        Moderator: Larisa Palamari
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Discipline chirurgicale, oftalmologie, ORL și reanimatologie

                                        <Deftm>
                                        Moderator: Olimpia Filimon
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Obstetrică și ginecologie, discipline pediatrice

                                        <Deftm>
                                        Moderatori: Tatiana Sulima &
                                      Elena Cucieru
                                        </Deftm>
                                    </Li>
                                      <Li>

                                      Discipline terapeutice, AMP, boli infecțioase și dermatovenerologie
                                        <Deftm>
                                        Moderatori: Liuba Tomulescu &
                                     Rodica Friptu
                                        </Deftm>
                                    </Li>
                                      <Li>

                                      Discipline fundamentale
                                        <Deftm>
                                        Moderator: Stela Carpov
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Discipline paraclinice, igienice și epidemiologie, discipline farmaceutice

                                        <Deftm>
                                        Moderator: Elena Eni &
                                       Natalia Guțu
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Discipline tehnico-dentare și stomatologice

                                        <Deftm>
                                        Moderator: Aida Botnaru
                                        </Deftm>
                                    </Li>




                                    </Ul>

                                    <Fl>
                                    <Bolt>
                                    11.00 – 12.00 :
                                    </Bolt>
                                    <Deft>
                                    Pauză 
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    12.00 – 14.00  :
                                    </Bolt>
                                    <Deft>
                                    Discuții Panel în secțiuni la subiectul: Managementul carierei
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    14.00 – 14.15 :
                                    </Bolt>
                                    <Deft>
                                    Pauză 
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    14.15 – 15.00  :
                                    </Bolt>
                                    <Deft>
                                    Totalurile conferinței.
                                    </Deft>
                                    </Fl>

                                </Rdiv>

                                
                            </CCont>


                        </Sect2>


                    </>
                    :

                    <>
            <Background>

                        <Cont>
                            
                            <Text>
                            The National Conference of International Participation of Teachers and Pupils in Postsection and Post-Secondary Postsection
                            </Text>
                          
                        </Cont>
                        </Background>

                        <Sect>
                     
                            <Bigt>
                            DEAR PARTENERS!
                                </Bigt>
                        <CCont>
                            <Deft>
                       
                            To begin with you, "Welcome!" At the 9th National Conference with International Participation of Teachers and Students in Postsecundar and Post-Secondary Postsection, (Chisinau, CEMF, Raisa Pacalo "18-19 November 2021).

                            </Deft>
                            <Deft>
                            The 9th Conference "The Quality of Educational Service - Imperative for Competitive Professional Education" is organized by the Center of Excellence in Medicine and Pacaro, "Raisa Pacalo" and is part of the largest scientific manifestations, which is organized in our institution , starting in 2004, when the first conference took place. In these biannual conferences, the results of the investigations undertaken by the teachers, on various aspects of updated didactics, are highlighted, with a variety of innovative issues and solutions, as well as a number of relevant recommendations, which streamlines the training process of the future specialist medical.

                           
                       </Deft>
                       <Deft>
                       
                       The organization of the 9th edition of the Conference is an important moment, as it is a scientific reference event for professional healthcare professionals. Within this activity, which will take place online, there will be aspects of technical vocational education in the context of its modernization and sustainable development, as well as the development, promotion of valences and priorities of medical education in the country and abroad.

                       </Deft>
                       <Deft>
                       The event will meet representatives of the academic environment, researchers, teachers, pupils, managers of educational institutions and representatives of public and private health institutions in the Republic of Moldova and abroad.
                           
                       </Deft>
                       <Deft>
                       
                       The materials will be published in the collection of materials of the national conference of national teachers and pupils in postsectar and post-secondary post-secondary medical education.
        At the same time, we launch the invitation to participate with articles and presentations for all teachers and students in the colleges of medicine and other technical vocational education institutions in the country. We are waiting for your publication materials until October 202021 at the conference2021cemf@gmail.com
       
                       </Deft>
                       <Deft>
                       All participants in this conference address collegiate greetings.

                           
                       </Deft>
                        </CCont>

                    
                        </Sect>

                        <Sect2>

                            <CCont>

                                <Medt>
                                Generic: Quality of the educational service - imperative for a competitive professional education
                                </Medt>
                                <Datt>
                                Thursday, November 18, 2021
                                </Datt>
                                <Rdiv>
                                    <Fl>
                                    <Bolt>
                                    12.00 – 12.30 :
                                    </Bolt>
                                    <Deft>
                                    Opening the conference
                                    </Deft>
                                    </Fl>
                                    <Bolt>
                                    12.30 – 17.30 :
                                    </Bolt>
                                    <Deft>
                                    Session I - Scientific Program (Plenary Reports) International Partners (Romania, France, Ukraine)
                                    </Deft>
                                    <Deft>
                                    Session II - Scientific Program (Plenary Reports) National Partners (USMF "N.Testemiţanu", Ust, USM, USP "Ion Creangă")
                                    </Deft>
                                    <Deft>
                                    Session III - Scientific Program (Plenary Reports) Organizers
                                    </Deft>
                                </Rdiv>

                                <Datt>
                                Friday, November 19, 2021
                                </Datt>

                                <Rdiv>

                                <Fl>
                                    <Bolt>
                                    09.00 – 11.00 :
                                    </Bolt>
                                    <Deft>
                                    Session II - activities in sections.
                                    </Deft>
                                    </Fl>
                                </Rdiv>

                                <Rdiv>
                                    
                                <Deft>
                                    Sections :
                                    </Deft>


                                    <Ul>

                                    <Li>
                                    Languages of communication
             <Deftm> Moderator: Elena Catărău</Deftm>
                                    </Li>

                                    <Li>
                                    Socio-human and real disciplines
                                    <Deftm> Moderators: Tatiana Dumitraș &
                                         Nina Mardari</Deftm>
                                    </Li>

                                    <Li>

                                    Nursing
                                        <Deftm>
                                        Moderator: Larisa Palamari
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Surgical Disciplines, Ophthalmology, Orl and Reanimatology

                                        <Deftm>
                                        Moderator: Olimpia Filimon
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Obstetrics and gynecology, pediatric disciplines

                                        <Deftm>
                                        Moderators: Tatiana Sulima &
                                      Elena Cucieru
                                        </Deftm>
                                    </Li>
                                      <Li>

                                      Therapeutic disciplines, AMPs, infectious diseases and dermatovenerology
                                        <Deftm>
                                        Moderators: Liuba Tomulescu &
                                     Rodica Friptu
                                        </Deftm>
                                    </Li>
                                      <Li>

                                      Fundamental disciplines
                                        <Deftm>
                                        Moderator: Stela Carpov
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Paraclinical, hygienic disciplines and epidemiology, pharmaceutical disciplines

                                        <Deftm>
                                        Moderators: Elena Eni &
                                       Natalia Guțu
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Technical-dental and dental disciplines

                                        <Deftm>
                                        Moderator: Aida Botnaru
                                        </Deftm>
                                    </Li>




                                    </Ul>

                                    <Fl>
                                    <Bolt>
                                    11.00 – 12.00 :
                                    </Bolt>
                                    <Deft>
                                    Pause
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    12.00 – 14.00  :
                                    </Bolt>
                                    <Deft>
                                    Panel Discussions in Sections in Subject: Career Management
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    14.00 – 14.15 :
                                    </Bolt>
                                    <Deft>
                                    Pause
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    14.15 – 15.00  :
                                    </Bolt>
                                    <Deft>
                                    The conference totals.
                                    </Deft>
                                    </Fl>

                                </Rdiv>

                                
                            </CCont>


                        </Sect2>


                    </>
}





</Overlay>





}

export default Conference;