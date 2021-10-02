import styled from 'styled-components'


const Heading = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: ${props => props.fW};
    font-size: ${props => props.fZ};
    color: #3366CC;
    text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;

export default Heading;