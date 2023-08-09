import { styled } from "styled-components";
import marathonBg1 from "./marathon-bg-1.png";

const Wrapper = styled.div`

    >h1{
        text-align : center;
        font-size : 1.2rem;
    }

    .dp{
        width : 360px;
        height : 300px;
        border : solid thin #ccc;
        margin : 30px auto;

        .dp1{
            background : yellow url(${marathonBg1}) center/cover;
            width : 360px;
            height : 300px;
            position : relative;
            text-shadow : 2px 2px 2px #000;
            h1{
                position : absolute;
                bottom : 40px;
                right : 20px;
                font-size : 1.2rem;
                color : #fff;
                z-index : 1;
            }
            p{
                position : absolute;
                bottom : 20px;
                right : 20px;
                color : #fff;
                z-index : 1;
            }
            img{
                position: absolute;
                bottom: 0;
                height: 165px;
                left: 50%;
                transform: translateX(-50%);
                border-radius : 20px 20px 0 0;
            }
        }
    }

    .inputs{
        input{
            width : 90%;
            display : block;
            padding : 10px;
            box-sizing : border-box;
            margin : 10px auto;
        }
    }

`

export default Wrapper