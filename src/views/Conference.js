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
   
   
    
`;
const CCont = styled.div`

width: 65vw;
text-align: justify;
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
                            Conferin??a a IX-a na??ional?? cu participare interna??ional??  a  cadrelor  didactice  ??i  a elevilor din  ??nv??????m??ntul medical postsecundar ??i postsecundar nonter??iar
                            </Text>
                          
                        </Cont>
                        </Background>

                        <Sect>
                     
                            <Bigt>
                            STIMA??I PARTENERI!
                                </Bigt>
                        <CCont>
                            <Deft>
                       
                            Pentru ??nceput v?? adres??m ,,Bine a??i Venit!??? la cea de a IX-a Conferin???? Na??ional?? cu participare interna??ional?? a cadrelor didactice ??i elevilor din ??nv??????m??ntul medical postsecundar ??i postsecundar nonte??iar, (Chi??in??u, CEMF ,,Raisa Pacalo??? 18-19 noiembrie 2021).

                            </Deft>
                            <Deft>
                            Conferin??a a IX-a cu genericul  ???Calitatea serviciului educa??ional ??? imperativ pentru un ??nv??????m??nt profesional competitiv???  este organizat?? de Centrul de excelen???? ??n medicin?? ??i farmacie ,,Raisa Pacalo??? ??i se ??nscrie ??n ??irul manifest??rilor ??tiin??ifice de anvergur??, care se organizeaz?? ??n institu??ia noastr??, ??ncep??nd cu anul 2004, c??nd a avut loc prima Conferin???? de acest gen. ??n cadrul acestor conferin??e bianuale sunt puse ??n valoare rezultatele investiga??iilor ??ntreprinse de c??tre profesori,  privind diverse aspecte ale didacticii actualizate, cu abordarea unor variet????i de probleme ??i solu??ii inovative, precum ??i o serie de recomand??ri pertinente, care eficientizeaz?? procesul de formare profesional?? a viitorului specialist medical.

                           
                       </Deft>
                       <Deft>
                       
                       Organizarea celei de a IX-a edi??ii a Conferin??ei este un moment important, deoarece reprezint?? un eveniment ??tiin??ific de referin???? pentru profesioni??tii din domeniul ??nv??????m??ntului profesional medical. ??n cadrul acestei activit????i, care se va desf????ura ??n regim online, se vor aborda aspecte ale ??nv??????m??ntului profesional tehnic ??n contextul moderniz??rii ??i dezvolt??rii lui durabile, precum ??i dezvoltarea, promovarea valen??elor ??i priorit????ilor ??nv??????m??ntului medical din ??ar?? ??i de peste hotare.

                       </Deft>
                       <Deft>
                       Evenimentul va ??ntruni reprezentan??i ai mediului academic, cercet??tori, cadre didactice, elevi, manageri ai institu??iilor de ??nv??????m??nt ??i reprezentan??i ai institu??iilor medico-sanitare publice ??i private din Republica Moldova ??i de peste hotare.

                           
                       </Deft>
                       <Deft>
                       
                           
        Materialele vor fi publicate ??n Culegerea de materiale ale Conferin??ei a IX-a Na??ionale cu participare interna??ional??  a cadrelor didactice ??i elevilor din ??nv??????m??ntul medical postsecundar ??i postsecundar nonter??iar.
       Totodat??, lans??m invita??ia pentru participare cu articole ??i prezent??ri pentru toate cadrele didactice ??i elevi din colegiile de medicin?? ??i din alte institu??ii din ??nv??????m??ntul profesional tehnic din ??ar??. A??tept??m materialele Dumneavoastr?? pentru publicare p??n?? la 20 octombrie 2021, la adresa conferinta2021cemf@gmail.com
       
                       </Deft>
                       <Deft>
                       Tuturor participan??ilor la aceast?? Conferin???? le adres??m salut??ri colegiale.

                           
                       </Deft>
                        </CCont>

                    
                        </Sect>

                        <Sect2>

                            <CCont>

                                <Medt>
                                GENERICUL: CALITATEA  SERVICIULUI  EDUCA??IONAL ??? IMPERATIV  PENTRU  UN ??NV??????M??NT  PROFESIONAL  COMPETITIV
                                </Medt>
                                <Datt>
                                JOI, 18 NOIEMBRIE, 2021
                                </Datt>
                                <Rdiv>
                                    <Fl>
                                    <Bolt>
                                    12.00 ??? 12.30 :
                                    </Bolt>
                                    <Deft>
                                    Deschiderea conferin??ei
                                    </Deft>
                                    </Fl>
                                    <Bolt>
                                    12.30 ??? 17.30 :
                                    </Bolt>
                                    <Deft>
                                    Sesiunea I ??? Program ??tiin??ific (rapoarte ??n plen) partenerii interna??ionali (Rom??nia, Fran??a, Ucraina)
                                    </Deft>
                                     <Deft>
                                    Sesiunea II ??? Program ??tiin??ific (rapoarte ??n plen) partenerii na??ionali (USMF ???N.Testemi??anu???, UST, USM, USP ???Ion Creang?????)
                                    </Deft>
                                    <Deft>
                                    Sesiunea III ??? Program ??tiin??ific (rapoarte ??n plen) organizatorii   
                                    </Deft>
                                </Rdiv>

                                <Datt>
                                VINERI 19 NOIEMBRIE, 2021
                                </Datt>

                                <Rdiv>

                                <Fl>
                                    <Bolt>
                                    09.00 ??? 11.00 :
                                    </Bolt>
                                    <Deft>
                                    Sesiunea a II-a ??? Activit????i ??n sec??iuni. 
                                    </Deft>
                                    </Fl>
                                </Rdiv>

                                <Rdiv>
                                    
                                <Deft>
                                    Sec??iunile :
                                    </Deft>


                                    <Ul>

                                    <Li>
                                    Limbi de comunicare
             <Deftm> Moderator: Elena Cat??r??u</Deftm>
                                    </Li>

                                    <Li>
                                    Discipline socio-umane ??i reale
                                    <Deftm> Moderatori: Tatiana Dumitra?? &
                                         Nina Mardari</Deftm>
                                    </Li>

                                    <Li>

                                    Nursing
                                        <Deftm>
                                        Moderator: Larisa Palamari
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Discipline chirurgicale, oftalmologie, ORL ??i reanimatologie

                                        <Deftm>
                                        Moderator: Olimpia Filimon
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Obstetric?? ??i ginecologie, discipline pediatrice

                                        <Deftm>
                                        Moderatori: Tatiana Sulima &
                                      Elena Cucieru
                                        </Deftm>
                                    </Li>
                                      <Li>

                                      Discipline terapeutice, AMP, boli infec??ioase ??i dermatovenerologie
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
                                      Discipline paraclinice, igienice ??i epidemiologie, discipline farmaceutice

                                        <Deftm>
                                        Moderator: Elena Eni &
                                       Natalia Gu??u
                                        </Deftm>
                                    </Li>
                                      <Li>
                                      Discipline tehnico-dentare ??i stomatologice

                                        <Deftm>
                                        Moderator: Aida Botnaru
                                        </Deftm>
                                    </Li>




                                    </Ul>

                                    <Fl>
                                    <Bolt>
                                    11.00 ??? 12.00 :
                                    </Bolt>
                                    <Deft>
                                    Pauz?? 
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    12.00 ??? 14.00  :
                                    </Bolt>
                                    <Deft>
                                    Discu??ii Panel ??n sec??iuni la subiectul: Managementul carierei
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    14.00 ??? 14.15 :
                                    </Bolt>
                                    <Deft>
                                    Pauz?? 
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    14.15 ??? 15.00  :
                                    </Bolt>
                                    <Deft>
                                    Totalurile conferin??ei.
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
                                    12.00 ??? 12.30 :
                                    </Bolt>
                                    <Deft>
                                    Opening the conference
                                    </Deft>
                                    </Fl>
                                    <Bolt>
                                    12.30 ??? 17.30 :
                                    </Bolt>
                                    <Deft>
                                    Session I - Scientific Program (Plenary Reports) International Partners (Romania, France, Ukraine)
                                    </Deft>
                                    <Deft>
                                    Session II - Scientific Program (Plenary Reports) National Partners (USMF "N.Testemi??anu", Ust, USM, USP "Ion Creang??")
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
                                    09.00 ??? 11.00 :
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
             <Deftm> Moderator: Elena Cat??r??u</Deftm>
                                    </Li>

                                    <Li>
                                    Socio-human and real disciplines
                                    <Deftm> Moderators: Tatiana Dumitra?? &
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
                                       Natalia Gu??u
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
                                    11.00 ??? 12.00 :
                                    </Bolt>
                                    <Deft>
                                    Pause
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    12.00 ??? 14.00  :
                                    </Bolt>
                                    <Deft>
                                    Panel Discussions in Sections in Subject: Career Management
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    14.00 ??? 14.15 :
                                    </Bolt>
                                    <Deft>
                                    Pause
                                    </Deft>
                                    </Fl>
                                    <Fl>
                                    <Bolt>
                                    14.15 ??? 15.00  :
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