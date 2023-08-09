import { styled } from "styled-components";

const Wrapper = styled.div`
    padding : 30px 0;
    background-image : linear-gradient(45deg, 
    rgba(0,100,200,0.7), rgba(0,100,200,0.7)), url('https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/2/2021_2$largeimg_288486978.JPG');
    text-align: center;
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    h1{
        font-size : 1.5rem;
    }
    .place {
        margin-top : 30px;
    }
    .date{
        font-size : 2rem;
        margin : 10px;
    }
    a{
        display : inline-block;
        background : #292;
        color : #fff;
        text-decoration : none;
        font-weight : bolder;
        padding : 15px 30px;
        border-radius : 3px;
        margin-top: 30px;
        box-shadow : 0px 2px 2px #000;
        border-bottom : solid 3px #070;
    }
   
`

export default Wrapper