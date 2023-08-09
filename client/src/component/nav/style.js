import { styled } from "styled-components";

const Wrapper = styled.header`

    display : flex;
    gap : 1px;
    >a{
        flex : 1;
        text-align : center;
        display : inline-block;
        padding : 30px 0;
        background : rgba(0,100,200,0.7);
        color : #fff;
        text-shadow : 1px 1px 3px #000;
        text-decoration : none;
        font-weight : bolder;
        font-size : 1.5rem;

    }   
`

export default Wrapper