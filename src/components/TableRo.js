import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
width: 1149px;
font-family: Lato;
font-style: normal;
font-size: 0.13rem;
text-align: center;
color: white;
margin-bottom: 50px;
`;

const Td = styled.td`

padding: 20px;

`;

const Th = styled(Td)`

padding: 20px;
width: 384px;
  background-color: #155FCF;
  font-weight: normal;
`;
const Tr = styled.tr`
:nth-child(odd) {
    background-color: #5485CF;
  }

  :nth-child(even) {
    background-color: #7B9FD5;
  }
`;



function TableRo(){


    return (
    <Table>

        <Tr>
            <Th>
            Limbi acceptate
            </Th>
            <Td>
            română, rusă, engleză, ucraineană, franceză, germană etc.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Titlul articolului
            </Th>
            <Td>
            Centrat, cu litere majuscule, boltat, mărimea 12
Notă! Nu se admit prezenţa abrevierilor în titlu.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Autorii
            </Th>
            <Td>
            Numele, prenumele complete ale autorului (coautorilor) – gradul didactic/științific, instituția.
                
            </Td>
        </Tr>
        <Tr>
            <Th>
            Rezumatul
            </Th>
            <Td>
            Rezumatul trebuie să fie scris la timpul trecut, persoana a treia. Acesta trebuie să ofere un sumar concis al scopului, obiectivelor, rezultatelor semnificative și concluziilor studiului, în limitele a 60 de cuvinte, organizate în limbele maternă și engleză.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Cuvintele cheie
            </Th>
            <Td>
            Să enumere până  la 5 cuvinte cheie, care sunt reprezentative pentru conţinutul articolului. 
            </Td>
        </Tr>
        <Tr>
            <Th>
            Conţinutul articolului
            </Th>
            <Td>
            Introducere/conținut, materiale și metode, rezultate/discuţii, concluzii, referinţe bibliografice.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Stilul textului
            </Th>
            <Td>
            Times New Roman, mărimea 12, la 1,15 intervale, aliniatele – 1,25, câmpul: în stânga – 30 mm, sus și jos  – 20 mm, în dreapta – 15 mm, utilizarea semnelor diacritice corespunzătoare (ă, î, â, ș, ț). 
Denumirea capitolelor se vor scrie cu MAJUSCULE, bold, centrat. Formulele, tabelele și figurile se numerotează consecutiv:
Figura 1 –  în textul explicativ sau Figura 1.  –  în  titlul figurii, care se plasează sub figură, utilizând font Times New Roman Regular, Centered.
Tabelul 1 – în textul explicativ și Tabelul 1. – în denumirea tabelului, care se amplasează deasupra lui, utilizând font Times New Roman, Regular, Centered.
Se menționează sursa datelor din tabel/figură, sub titlul tabelului/figurii, indicând în mod obligatoriu numele autorului sau adresa sursei on-line.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Format acceptat
            </Th>
            <Td>
            .docx; .doc; .rtf
            </Td>
        </Tr>
        <Tr>
            <Th>
            Concluzii
            </Th>
            <Td>
            Vor fi redate concis și vor reflecta esența temei abordate.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Conţinutul articolului
            </Th>
            <Td>
            Va conține sursele bibliografice utilizate în articol și se va perfecta conform cerințelor internaționale: numele autorilor, titlul articolului, numele revistei, anul apariției, volumul, prima și ultima pagină. Link-urile surselor electronice (site-grafie) se vor indica la sfârșitul listei bibliografice. 
Referințele bibliografice vor fi prezentate într-o succesiune alfabetică și se vor indica în paranteze pătrate, inserate în text (de exemplu – [8].).
            </Td>
        </Tr>
        <Tr>
            <Th>
            Articolele vor fi expediate pe adresa
            </Th>
            <Td>
            conferinta2021cemf@gmail.com
            </Td>
        </Tr>

    </Table>
    );
}


export default TableRo;