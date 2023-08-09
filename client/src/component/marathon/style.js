import { styled } from "styled-components";

const Wrapper = styled.div`
    
    h1{
        text-align : center;
    }

    form{
        input,select,option{
            width : 90%;
            margin : 10px auto;
            padding : 10px;
            box-sizing : border-box;
            display : block;
            &[type=button]{
                display : block;
                background : #292;
                color : #fff;
                text-decoration : none;
                font-weight : bolder;
                padding : 15px 30px;
                border-radius : 3px;
                border : none;
                margin: 30px auto;
                box-shadow : 0px 2px 2px #000;
                border-bottom : solid 3px #070;
                width : 150px;
            }   
        }
        select{
            height : 40px;
        }
    }
   
`

export default Wrapper