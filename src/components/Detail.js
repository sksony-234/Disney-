import React from 'react'
import styled from 'styled-components'

const Detail = () => {
  return (
    <Container>
        <div className="background">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40" alt="" />
        </div>
        <div className="imgTitle">
            <img src="" alt="" />
        </div>
        
        <Controls>
            <button className="playButton">
                <img src="images/play-icon-black.png" alt="" />
                <span>PLAY</span>
            </button>
            <button className="trailerButton">
                <img src="images/play-icon-white.png" alt="" />
                <span>TRAILER</span>
            </button>
            <button className="addButton">
                <span>+</span>
            </button>
            <button className="groupwatchButton">
                <img src="images/group-icon.png" alt="" />
            </button>
        </Controls>
        <div className="subTitle">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil.</p>
        </div>
        <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iusto quod repellat, voluptatem, quidem tenetur reiciendis dolore, ipsa minima dolores hic. Vel voluptates, a aut asperiores aspernatur hic esse voluptatem!</p>
        </div>
    </Container>
  )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;

    .background{
        position:fixed;
        top:0;
        bottom:0;
        left: 0;
        right:0;
        z-index:-1;
        opacity:0.7;
        img{
            width:100%;
            /* height:100%; */
            /* object-fit:cover; */
        }
    }

    .imgTitle{
        height:30vh;
        min-height:170px;
        width:35vw;
        min-width:200px;
        margin-top:60px;
        
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }

    .subTitle{
        color:rgb(249, 249, 249);
        font-size:17px;
        min-height:20px;
        margin-top:26px;
        background:rgba(255, 255, 255, 0.4);
        display:inline-block;
        padding:3px 14px;
    }
    
    .description{
        line-height:1.4;
        margin-top:16px;
        font-size:14px;
        color:rgb(249, 249, 249);
        max-width:600px;
    }
`;

const Controls = styled.div`
    display:flex;
    align-items:center;
    .playButton, .trailerButton{
        border-radius:4px;
        font-size:15px;
        padding:0 24px;
        margin-right:22px;
        display:flex;
        align-items:center;
        height:56px;
        background:rgb(249, 249, 249);
        border:none;
        letter-spacing:1.8px;
        cursor:pointer;
        span{
            color:black;
        }

        &:hover{
            background: rgb(198, 198, 198);
        }
    }
    .trailerButton{
        background:rgba(0, 0, 0, 0.3);
        border:1px solid rgb(249, 249, 249);
        span{
            color:rgba(249, 249, 249);
        }
    }
    .addButton, .groupwatchButton{
       margin-right:16px;
       width:44px;
       height:44px;
       display:flex;
       align-items:center;
       justify-content:center;
       border-radius:50%;
       border:2px solid white;
       background:rgba(0, 0, 0, 0.6);
       cursor:pointer;
       
       span{
           font-size:30px;
           color:#fff;
        }
    }
    .groupwatchButton{
        background:rgba(0, 0, 0, 0.9);
    }
`;