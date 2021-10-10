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



function TableEn(){


    return (
    <Table>

        <Tr>
            <Th>
            Accepted languages
            </Th>
            <Td>
            Romanian, Russian, English, Ukrainian, French, German, etc.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Title of the article
            </Th>
            <Td>
            Centered, capital letters, vaulted, size 12. 
Note! The presence of abbreviations in the title is not admitted.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Authors
            </Th>
            <Td>
            Name, full name of the author (co-authors) - didactic / scientific grade, institution.
                
            </Td>
        </Tr>
        <Tr>
            <Th>
            Summary
            </Th>
            <Td>
            The summary must be written at the past time, the third person. It must provide a concise summary of the goal, objectives, significant results and the conclusions of the study, within 60 words, organized in their mother tongues and English.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Keywords
            </Th>
            <Td>
            To list up to 5 keywords, which are representative of the contents of the article.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Content of the article
            </Th>
            <Td>
            Introduction / content, materials and methods, results / discussions, conclusions, bibliographic references.
            </Td>
        </Tr>
        <Tr>
            <Th>
            The style of the text
            </Th>
            <Td>
            Times New Roman, size 12, at 1.15 intervals, alignments - 1,25, field: to the left - 30 mm, up and down - 20 mm, on the right - 15 mm, use of appropriate diacritical signs (ă, î, â, ș, ț).
The name of the chapters will be written in capital letters, Bold, centered. The formulas, tables and figures are numbered consecutively:
Figure 1 - In the explanatory text or Figure 1. - In the title of the figure, which is placed under the figure, using the Times New Roman Font, CENTERED.
Table 1 - In the explanatory text and Table 1. - in the name of the table, which is placed above it, using the Times New Roman font, Regular, Centred.
The source of data in the table / figure is mentioned under the title of the table / figure, necessarily indicating the author's name or the address of the source on-line.
               </Td>
        </Tr>
        <Tr>
            <Th>
            Accepted format
            </Th>
            <Td>
            .docx; .doc; .rtf
            </Td>
        </Tr>
        <Tr>
            <Th>
            Conclusions
            </Th>
            <Td>
            They will be rendered concise and will reflect the essence of the topic addressed.
            </Td>
        </Tr>
        <Tr>
            <Th>
            Content of the article
            </Th>
            <Td>
            It will contain the bibliographic sources used in the article and will be perfect according to international requirements: authors' names, title of the article, magazine name, year of appearance, volume, first and last page. Electronic source links (site-graphie) will be indicated at the end of the bibliographic list.
Bibliographic references will be presented in an alphabetical sequence and will be indicated in square brackets, inserted in the text (eg - [8].).
            </Td>
        </Tr>
        <Tr>
            <Th>
            Items will be shipped to address
            </Th>
            <Td>
            conferinta2021cemf@gmail.com
            </Td>
        </Tr>

    </Table>
    );
}


export default TableEn;