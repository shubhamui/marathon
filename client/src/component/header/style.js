import { styled } from "styled-components";

const Wrapper = styled.header`

    position : relative;
    display : flex;
    align-items : center;
    padding : 10px;
    a{
        color : #000;
        flex : 1;
        text-align : center;
        font-weight : bolder;
        color : #444;
        text-shadow : 1px 1px 2px #ccc;
        display : block;
        text-decoration : none;
        font-size : 1.5rem;
    }
    button{
        background : transparent;
        border : none;
        display : flex;
        align-items : center;
        padding : 10px;
    }
   
`

export default Wrapper