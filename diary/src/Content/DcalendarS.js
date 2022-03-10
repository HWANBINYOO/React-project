import styled from "styled-components";

export const Dcalendar = styled.div`
    width: 90%;
    height:75vh;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    
    border: 2px black solid;
    margin 0 auto;

    .text-link{
        font-family: "LeeSeoyun";
        font-size:1.5rem;
        outline:none;
        color:black;
        text-decoration: none;
    }

    .react-calendar{
        border:none;
        font-size:2rem;
        width:100%;
        height:100%;
    }
`;
