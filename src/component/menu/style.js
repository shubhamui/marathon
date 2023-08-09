import { styled } from "styled-components";

const Wrapper = styled.div`

    position : absolute;
    width : 90%;
    max-width : 360px;
    background : rgba(255,255,255,1);
    height : calc(100vh - 100px);
    top : 65px;
    left : 0;
    z-index : 1;
    box-shadow : 2px 0 2px #888;
    ul{
        list-style: none;
        li a{
            padding : 15px;
            margin : 0 10px;
            font-size : 1rem;
            border-bottom : solid thin #ccc;
            display : flex;
            align-items : center;
            gap : 10px;
            &:hover{
                background : #aaa;
            }
        }
    }
   
`

export default Wrapper