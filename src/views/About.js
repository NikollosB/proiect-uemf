import React from 'react';
import styled from 'styled-components';


import NavBar from '../components/NavBar';
import Background from '../components/Background';

const Overlay = styled.div`
    overflow: hidden;
`;

const NewBackground = styled(Background)`

`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 48px;
    top: 50%;

`;

const P = styled.p`
    font-family: Nunito, sans-serif;
    font-style: italic;
    font-size: 0.18rem;
    color: #3366CC;
    width: 3.68rem;
`;

const Author = styled(P)`
    font-style: none;
    font-weight: bold;
    text-align: right;
    padding-right: 20px;
`;

const Gradient = styled.div`
    width: 100vw;
    height: 50px;
    background: linear-gradient(180deg, #ACCBF9 78.65%, #FFFFFF 100%);
`;

const Section = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 60px;
    overflow: hidden;
`;

const TextBox = styled.div`
    width: 5.3rem;
    padding: 10px;
    position: relative;
`;

const TheText = styled.p`
    font-family: Lato;
    font-size: 0.12rem;
    color: #284D97;
    line-height: 150%;
    text-align: justify;

    :first-letter {
        font-family: Italianno, sans-serif;
        font-size: 0.36rem;
        color: #284D97;
        padding: 4px;

    }
`;

const LastText = styled.p`
    font-family: Lato;
    font-size: 0.12rem;
    color: #284D97;
    line-height: 150%;
`;

const AnotherSection = styled(Section)`
    padding-top: 0;
    padding-bottom: 0;
`;


function About({language, setLanguage}) {
    return <Overlay>
        <NavBar language={language} setLanguage={setLanguage} />
        {language == 'ro' ? <><NewBackground>
            <Container>
                <P>
                    „Suntem ceea ce facem în mod repetat,
                    prin urmare, excelența nu este un act singular, ci un obicei”
                </P>
                <Author>
                    Aristotel
                </Author>
            </Container>
        </NewBackground>
        <Section style={{backgroundColor: 'white'}}>
            <TextBox>
                <TheText>
                     Centrul de excelenţă în medicină şi farmacie „Raisa Pacalo”
                     și-a început activitatea la 18 octombrie 1944, odată cu 
                     deschiderea
                     Şcolii de felceri şi moaşe. Pe parcursul anilor 
                     instituția a avut mai multe denumiri, iar în 2016 prin 
                     Hotărârea Guvernului RM nr. 744 din 10 iulie, Colegiul Național 
                     de Medicină și Farmacie „ Raisa Pacalo” este reorganizat prin 
                     transformare în Centrul de excelență în medicină și farmacie 
                     „Raisa Pacalo”. Odată cu reorganizarea înstituției, aceasta 
                     devine centru metodic pentru toate colegiile medicale din 
                     republică,  cu noi funcții: de oferire a programelor educaționale 
                     de formare profesională inițială combinate (Nivelul 4  și 5 conform 
                     Cadrului Național al Calificărilor), de asigurare didactică, 
                     curriculară şi metodologică a învățământului profesional medical, 
                     de coordonare şi ghidare metodologică a instituţiilor arondate, 
                     de formare continuă a cadrelor didactice din sistem etc. 
                </TheText>
            </TextBox>
        </Section>

        <Section style={{backgroundColor: '#cee1fd'}}>
            <TextBox>
                <TheText>
                     Excelența, calitatea și performanța sunt doar câteva din 
                     valorile promovate de instituție. În semn de înaltă apreciere 
                     a meritelor deosebite în dezvoltarea învăţământului preuniversitar 
                     în domeniul ocrotirii sănătăţii, la 5 iunie 2014 prin Decretul 
                     nr. 344 al Preşedintelui Republicii Moldova instituţiei i s-a 
                     conferit Ordinul „Gloria Muncii” .
                </TheText>
            </TextBox>
        </Section>

        <Section style={{backgroundColor: '#9dc3fb'}}>
            <TextBox>
                <TheText>
                     Managementul modern, autentic şi participativ pe care se axează 
                     procesul educațional în instituție,  stă la baza realizării 
                     reformelor din domeniul educaţiei şi al sănătăţii, promovând 
                     principiile îmbunătăţirii continue, a creativităţii şi calităţii. 
                     În scopul asigurării unui proces de instruire dinamic şi modern, 
                     o atenţie sporită se acordă renovării bazei tehnico-materiale, 
                     prin reutilarea locurilor de muncă, a sălilor de curs, a cabinetelor 
                     şi a laboratoarelor. Cu suportul statului şi al Fondului de Investiţii 
                     în Sănătate, al Asociaţiei „Farmaciştii fără frontiere”, al UNFPA, 
                     UNICEF, SOROS, GIZ a fost organizat Centrul Educațional de Simulare 
                     în Instruirea Medicală dotat cu: mulaje simulatoare, tehnică didactică 
                     modernă, calculatoare.
                </TheText>
            </TextBox>
        </Section>


        <Section style={{backgroundColor: '#6ca4f9',paddingBottom: '100px', clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'}}>
            <TextBox>
                <TheText>
                     Formarea profesională și creşterea în carieră a cadrelor 
                     didactice este o prerogativă primordială a echipei manageriale, 
                     încurajată prin participări la cursuri de educaţie profesională 
                     continuă, congrese, conferinţe, ateliere metodice, confirmarea 
                     şi susţinerea gradelor didactice, studierea experienţei avansate 
                     a profesorilor etc. În cadrul instituției activează pedagogi 
                     de înaltă ţinută profesională, deţinători de grade didactice 
                     superior, unu și doi-81 %, doctori în medicină, doctori în pedagogie, 
                     specialişti calificaţi cărora le poartă respectul multe generaţii 
                     de absolvenţi. 
                </TheText>
            </TextBox>
        </Section>


        <AnotherSection style={{marginTop: '40px'}}>
            <TextBox>
                <TheText>
                     Reformele din învățământul profesional tehnic din țară au 
                     servit drept premiză pentru modernizarea și eficientizarea 
                     procesului de formare inițială a specialiştilor medicali și 
                     farmaceutici, în corespundere cu cerințele timpului și a pieții 
                     muncii.  
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Asigurarea ştiinţifică, curriculară şi metodologică a 
                     învăţământului medical postsecundar și postsecundar nonterțiar, 
                     cu o bază normativă racordată la Cadrul Naţional al Calificărilor, 
                     este un imperativ al timpului. În instituție a fost elaborat și 
                     aprobat pachetul de documente normativ-reglatorii, care asigură 
                     buna funcţionalitate a procesului de formare profesională, prin 
                     menţinerea unui mediu educaţional de calitate.   
                </TheText>
            </TextBox>
        </AnotherSection>

         <AnotherSection>
            <TextBox>
                <TheText>
                     Integrarea valorilor europene în diverse domenii ale economiei 
                     naționale au orientat spre o nouă viziune a organizării 
                     învăţământului medical postsecundar și postsecundar nonterțiar, 
                     a managementului educaţional în cadrul politicilor naţionale 
                     din învățământ și sănătate.   
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Specialistul competent şi competitiv, capabil să răspundă 
                     proactiv la provocările timpului, în corespundere cu cerinţele 
                     actuale ale medicinii și sănătății publice, care va da dovadă 
                     de profesionalism în acordarea serviciilor de asistență medicală 
                     populaţiei țării, este finalitatea programelor de formare 
                     profesională oferite de CEMF „Raisa Pacalo”.   
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Acreditarea programelor de formare profesională, susținută cu succes 
                     în anul 2019, în urma evaluării externe de ANACEC, ne oferă posibilitatea 
                     de a pregăti specialiști la 6 specialități cu 7 calificări:
                        1. Specialitatea 91110. Stomatologie, calificarea Tehnician dentar.
                        2. Specialitatea 91210. Medicină, calificările Asistent medical, Asistent medical igienist-epidemiolog;
                        3. Specialitatea 91310. Îngrijirea bolnavilor, calificarea Asistent medical;
                        4. Specialitatea 91320. Obstetrică, calificarea Moaşă;
                        5. Specialitatea 91410. Diagnosticare medicală şi tehnici de tratament, calificarea Asistent medical în diagnostic de laborator;
                        6. Specialitatea 91610. Farmacie, calificarea Asistent farmacist;
                    Diploma de recunoștință și Cristalul Calității au fost acordate CEMF ,,Raisa Pacolo” 
                    de ANACEC în semn de înaltă apreciere pentru promovarea culturii calității procesului 
                    educațional și rezultate excelente obținute în procesul de evaluare externă.
                    Actualele programe de formare profesională stabilesc relaţii clare între cunoştinţele, 
                    capacităţile, atitudinile şi valorile viitorilor specialişti medicali,  asigurând 
                    formarea competenţelor necesare integrării sociale şi educaţiei continue, formând 
                    un specialist independent şi responsabil, în măsură să decidă asupra propriilor 
                    trasee de dezvoltare profesională.
                </TheText>
            </TextBox>
        </AnotherSection>


        <AnotherSection style={{marginTop: '40px'}}>
            <TextBox>
                <TheText>
                     Procesul de instruire este axat pe elevi-beneficiarii direcți, 
                     care definesc şi completează factorul uman din instituție. 
                     Activitățile organizate sunt justificate în măsura în care 
                     îmbunătățesc, în mod evident, calitatea serviciilor oferite 
                     beneficiarilor. Succesul instituției este măsurat după modul 
                     în care fiecare elev admis la studii și ajuns la finalizarea 
                     acestora se regăsește în profesia aleasă, și are implicit 
                     răspunsul la întrebarea „Ce fel de specialist sunt? Cum rămân 
                     unul bun, cum pot deveni și mai bun?”
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Asigurarea , dezvoltarea și îmbunătățirea continuă a procesului 
                     educativ în instituție este determinată de calitatea proceselor 
                     și a produselor, de calitatea sistemului organizațional și a 
                     serviciilor educaționale oferite viitorilor specialiști medicali.
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Centrul de excelenţă pe parcursul a 76 ani de activitate a 
                     pregătit 28 117 de specialişti medicali care cu mult devotament 
                     activează în diferite ramuri ale medicinei, consacrându-se unei 
                     cauze nobile – sănătăţii umane. Astăzi nu există instituţie 
                     medicală în ţară în care să nu activeze absolvenţii CEMF 
                     „Raisa Pacalo”.
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Angajarea și evaluarea traseului profesional al absolvenţilor 
                     are ca scop monitorizarea gradului de integrare profesională pe 
                     piaţa muncii, precum şi a ratei de tranziţie la următoarea 
                     treaptă de educaţie. Competitivitatea absolvenților pe piața 
                     muncii este confirmată de solicitarea sporită a instituțiilor 
                     medicale de stat, departamentale și private vizând posturile vacante. 
                </TheText>
            </TextBox>
        </AnotherSection>

         <AnotherSection>
            <TextBox>
                <TheText>
                     La nivel de instutuție o atenție deosebită se acordă funcției de 
                     coordonare și ghidare a activității colegiilor de medicină arondate 
                     metodic. Consilerea și asistența metodică în CEMF „Raisa Pacalo” 
                     se efectuiează pe mai multe dimensiuni și direcții: ghidarea 
                     strategică a colegiilor arondate în oferirea de servicii 
                     educaționale; ghidarea didactică și metodologică în vederea 
                     standardizării calității în prestarea serviciilor educaționale 
                     de formare profesională; ghidarea și asistența metodică în 
                     formarea continuă a cadrelor didactice; elaborarea de proiecte, 
                     testarea de noi modele și implementarea de proiecte-pilot care ar 
                     stimula integrarea conținuturilor și serviciilor inovatoare în 
                     învățământul profesional medical etc.
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Obiectivele şi finalităţile educaţionale, trasate în cadrul 
                     reformelor din ÎPT, au fost obținute datorită unui management 
                     eficient al procesului de formare practică şi asigurat de un 
                     parteneriat durabil cu specialiștii din domeniul practic. 
                     Consolidarea cooperării intersectoriale în domeniul creării 
                     parteneriatelor dintre CEMF „Raisa Pacalo” și instituţiile 
                     medicale în vederea facilitării angajării eficiente în câmpul 
                     muncii a devenit o prioritate în activitatea managerială a 
                     instituției. 
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection style={{marginTop: '40px'}}>
            <TextBox>
                <LastText>
                     În scopul implementării noilor tendințe de dezvoltare a științei medicale și pedagogice, a documentelor de politici și actelor normative, care vizează învățământul profesional medical din țară, CEMF „Raisa Pacalo” a dezvoltat relații de parteneriat cu parteneri naționali: USMF ,,Nicolae Testemițanu”, USM, UST, USP ,,Ion Creangă și internaționali: Uniunea Europeană, Universitatea din Greensboro, Carolina de Nord, SUA, Școala Superioară de Medicină, Tallinn, Estonia, UNFPA, Soros-Moldova, UNICEF, proiectele: Sinior Expert Service (Germania), „Viața Sănătoasă” (Elveția), GIZ (Germania). Studierea experiențelor instituțiilor de învățământ similare de peste hotare a fost posibilă datorită colaborării cu experții din cadrul Ministerului Sănătății și Ministerul Educației și Cercetării al RM, colegiilor de medicină și facultăților de nursing din: Germania, Polonia, Finlanda, Slovenia, Norvegia, Irlanda, SUA. În rezultatul schimbului de experiență au fost introduse: exersarea manoperelor practice în condiții apropiate de realitatea medicală datorită funcționării Centrului Educațional de Simulare în Instruirea Medicală; formarea abilităților specifice prin implementarea sarcinilor didactice; dezvoltarea și consolidarea competențelor profesionale prin studiul de caz și pacienți standardizați; evaluarea etapizată a competențelor profesionale prin testare; realizarea sarcinilor didactice și a studiilor de caz. 
                </LastText>
            </TextBox>
        </AnotherSection></> :



        <><NewBackground>
            <Container>
                <P>
                    "We are what we do repeatedly,
                    therefore, excellence is not a singular act, but a habit ”
                </P>
                <Author>
                    Aristotel
                </Author>
            </Container>
        </NewBackground>
        <Section style={{backgroundColor: 'white'}}>
            <TextBox>
                <TheText>
                     Center of Excellence in Medicine and Pharmacy "Raisa Pacalo"
                     began its activity on October 18, 1944, with
                     opening
                     School of ferns and midwives. Over the years
                     the institution had several names, and in 2016 through
                     Decision of the Government of the Republic of Moldova no. 744 of July 10, National College
                     of Medicine and Pharmacy "Raisa Pacalo" is reorganized by
                     transformation into the Center of Excellence in Medicine and Pharmacy
                     "Raisa Pacalo." With the reorganization of the institution, it
                     becomes a methodical center for all medical colleges in
                     republic, with new functions: to provide educational programs
                     combined initial vocational training (Level 4 and 5 according to
                     National Qualifications Framework), teaching insurance,
                     curricular and methodological approach to medical vocational education,
                     coordination and methodological guidance of the rounded institutions,
                     continuous training of teachers in the system, etc. 
                </TheText>
            </TextBox>
        </Section>

        <Section style={{backgroundColor: '#cee1fd'}}>
            <TextBox>
                <TheText>
                     Excellence, quality and performance are just a few of the
                     the values ​​promoted by the institution. As a sign of high appreciation
                     of special merits in the development of pre-university education
                     in the field of health care, on June 5, 2014 by Decree
                     no. 344 of the President of the Republic of Moldova to the institution
                     conferred the Order "Gloria Muncii".
                </TheText>
            </TextBox>
        </Section>

        <Section style={{backgroundColor: '#9dc3fb'}}>
            <TextBox>
                <TheText>
                     Modern, authentic and participatory management on which it focuses
                     the educational process in the institution, is the basis of the realization
                     education and health reforms, promoting
                     the principles of continuous improvement, creativity and quality.
                     In order to ensure a dynamic and modern training process,
                     increased attention is paid to the renovation of the technical-material base,
                     by re-equipping jobs, classrooms, offices
                     and laboratories. With the support of the state and the Investment Fund
                     Health, the Pharmacists Without Borders Association, UNFPA,
                     UNICEF, SOROS, GIZ was organized Educational Simulation Center
                     in Medical Training equipped with: simulator molds, teaching technique
                     modern computers.
                </TheText>
            </TextBox>
        </Section>


        <Section style={{backgroundColor: '#6ca4f9',paddingBottom: '100px', clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'}}>
            <TextBox>
                <TheText>
                     Favored vocational training and career growth of staff
                     teaching is a primary prerogative of the management team,
                     encouraged by participating in vocational education courses
                     continuous, congresses, conferences, methodical workshops, confirmation
                     and supporting teaching degrees, studying advanced experience
                     of teachers etc. Pedagogues work within the institution
                     of high professional standing, holders of teaching degrees
                     higher, one and two-81%, doctors of medicine, doctors of pedagogy,
                     qualified specialists to whom many generations respect
                     of graduates.
                </TheText>
            </TextBox>
        </Section>


        <AnotherSection style={{marginTop: '40px'}}>
            <TextBox>
                <TheText>
                     Reforms in technical vocational education in the country have
                     served as a premise for modernization and efficiency
                     the initial training process of medical specialists and
                     in accordance with the requirements of the time and the market
                     work.  
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Aassurance of
                     post-secondary and non-tertiary post-secondary medical education,
                     with a normative basis connected to the National Qualifications Framework,
                     it is an imperative of time. It was also developed in the institution
                     approved the package of normative-regulatory documents, which ensures
                     good functionality of the training process, through
                     maintaining a quality educational environment.   
                </TheText>
            </TextBox>
        </AnotherSection>

         <AnotherSection>
            <TextBox>
                <TheText>
                     Integrating European values ​​in various areas of the economy
                     oriented towards a new vision of the organization
                     post-secondary and non-tertiary post-secondary medical education,
                     of educational management in national policies
                     from education and health.  
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Super competent and competitive specialist, able to answer
                     proactive to the challenges of time, in line with requirements
                     current state of medicine and public health, which will prove
                     of professionalism in providing health care services
                     population of the country, is the purpose of training programs
                     offered by CEMF "Raisa Pacalo".  
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Accreditation of vocational training programs, successfully supported
                     in 2019, following the external evaluation by ANACEC, it offers us the possibility
                     to train specialists in 6 specialties with 7 qualifications:
                        1. Specialty 91110. Dentistry, Dental Technician qualification.
                        2. Specialty 91210. Medicine, qualifications Nurse, Hygienist-epidemiologist;
                        3. Specialty 91310. Patient care, nurse qualification;
                        4. Specialty 91320. Obstetrics, Midwife qualification;
                        5. Specialty 91410. Medical diagnosis and treatment techniques, qualification Medical assistant in laboratory diagnosis;
                        6. Specialty 91610. Pharmacy, qualification Pharmacist Assistant;
                    The diploma of gratitude and the Crystal of Quality were awarded to CEMF "Raisa Pacolo"
                    by ANACEC as a sign of high appreciation for promoting the culture of process quality
                    educational and excellent results obtained in the external evaluation process.
                    Current vocational training programs establish clear relationships between knowledge,
                    the capabilities, attitudes and values ​​of future medical specialists, ensuring
                    training the skills necessary for social integration and continuing education, training
                    an independent and responsible specialist, able to decide on their own
                    professional development paths.
                </TheText>
            </TextBox>
        </AnotherSection>


        <AnotherSection style={{marginTop: '40px'}}>
            <TextBox>
                <TheText>
                     Process of training is focused on direct student-beneficiaries,
                     which define and complement the human factor in the institution.
                     Organized activities are justified to the extent that
                     they obviously improve the quality of the services provided
                     beneficiaries. The success of the institution is measured by the way
                     in which each student admitted to studies and reached completion
                     they are found in the chosen profession, and by default
                     the answer to the question “What kind of specialist am I? How do I stay
                     a good one, how can I become even better? ”
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Already an ensuring, developing and continuously improving the process
                     educational in the institution is determined by the quality of the processes
                     and products, the quality of the organizational system and a
                     educational services offered to future medical specialists.
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Center of excellence during 76 years of activity a
                     trained 28,117 medical specialists who with much devotion
                     active in various branches of medicine, devoting himself to a
                     noble causes - human health. There is no institution today
                     in the country where CEMF graduates do not work
                     "Raisa Pacalo."
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Assured hiring and evaluating the professional path of graduates
                     aims to monitor the degree of professional integration on
                     labor market, as well as the transition rate to the next
                     stage of education. Competitiveness of graduates in the market
                     is confirmed by the increased demand of the institutions
                     state, departmental and private medical vacancies. 
                </TheText>
            </TextBox>
        </AnotherSection>

         <AnotherSection>
            <TextBox>
                <TheText>
                     Level of the institution, special attention is paid to the function of
                     coordination and guidance of the activity of the rounded medical colleges
                     methodical. Methodical advice and assistance in CEMF "Raisa Pacalo"
                     it is performed in several dimensions and directions: guidance
                     strategic role of the colleges in providing services
                     educational; didactic and methodological guidance in view
                     standardization of quality in the provision of educational services
                     professional deformation; guidance and methodical assistance in
                     continuous training of teachers; project development,
                     testing new models and implementing pilot projects that would
                     stimulate the integration of innovative content and services into
                     medical vocational education, etc.
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection>
            <TextBox>
                <TheText>
                     Oriented educational objectives and purposes, outlined in
                     TVET reforms were achieved through management
                     effective of the practical training process and provided by a
                     sustainable partnership with specialists in the practical field.
                     Strengthening intersectoral cooperation in the field of creation
                     partnerships between CEMF "Raisa Pacalo" and institutions
                     in order to facilitate efficient employment in the field
                     has become a priority in the managerial activity of
                     institution. 
                </TheText>
            </TextBox>
        </AnotherSection>

        <AnotherSection style={{marginTop: '40px'}}>
            <TextBox>
                <LastText>
                     In order to implement the new trends in the development of medical and pedagogical science, policy documents and normative acts, aimed at medical professional education in the country, CEMF "Raisa Pacalo" has developed partnerships with national partners: USMF "Nicolae Testemitanu", USM, UST, USP, Ion Creanga and international: European Union, University of Greensboro, North Carolina, USA, School of Medicine, Tallinn, Estonia, UNFPA, Soros-Moldova, UNICEF, projects: Senior Expert Service (Germany) , “Healthy Living” (Switzerland), GIZ (Germany). The study of the experiences of similar educational institutions abroad was possible thanks to the collaboration with experts from the Ministry of Health and the Ministry of Education and Research of the Republic of Moldova, medical colleges and nursing faculties from: Germany, Poland, Finland, Slovenia, Norway, Ireland, USA. . As a result of the exchange of experience were introduced: the practice of practical work in conditions close to the medical reality due to the operation of the Simulation Educational Center in Medical Training; training specific skills by implementing teaching tasks; developing and strengthening professional skills through case study and standardized patients; staged assessment of professional skills through testing; carrying out teaching tasks and case studies.
                </LastText>
            </TextBox>
                     </AnotherSection></> }
        

        
    </Overlay>
}

export default About;