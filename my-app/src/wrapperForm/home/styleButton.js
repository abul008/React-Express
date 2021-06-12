import styled from "styled-components" ;

const TableButton = styled.button`
width: 100px;
font-size: 20px;
color: "whitesmoke";
font-size:14px;
border: ${props => props.bord ? "2px ridge red" : "none"};
padding: 8px 0px;
background: ${props => props.send ? "red" : "#1eff1e"};
`

const SpanButton = styled.span `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const FormButton = styled.button`
    width: 88%;
    height: 40px;
    border-radius: 11px;
    background: black;
    align-items: center;
    display: flex;
    color: white;
    justify-content: center;
    position: relative;
    font-size: 24px;
    
    :before{
        background: white;
        width: 0%;
        height: 100%;
        content: "Load";
        align-items: center;
        justify-content: center;
        position: absolute;
        display: flex;
        -webkit-transition: width 0.6s linear;
        border-radius:11px;   
    }
    :hover:before{
        width:100%;
        color:#0dcdec;
        
        }
    :hover{
        box-shadow: 0px 0px 16px -1px black;
    }

`
export {TableButton,SpanButton,FormButton} ;