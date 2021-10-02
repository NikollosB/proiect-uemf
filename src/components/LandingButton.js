import styled from 'styled-components';


const LandingButton = styled.button`
    background-color: #F0EAD6;
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px;

    font-family: Nunito, sans-serif;
    font-weight: bold;
    font-size: 0.125rem;

    color: #03254C;
    cursor: pointer;
    transition: all 500ms ease;
    padding: 0.0625rem 0.125rem;

    margin-top: 10px;

    :hover {
        background-color: #03254C;
        color: #F0EAD6;
    }
`;

export default LandingButton;