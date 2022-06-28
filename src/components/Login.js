import React from 'react'
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
        <Content>
            <img src="/images/cta-logo-one.svg" alt="" className="logoOne" />
            <div className="signup">GET ALL THERE</div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nobis, commodi ratione debitis dolorum pariatur labore officiis similique voluptatem omnis nostrum voluptatum suscipit laboriosam iusto laudantium, unde at veritatis! Aperiam veritatis soluta iusto temporibus unde!</p>
            </div>
            <img src="/images/cta-logo-two.png" alt="" className="logoTwo" />
        </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    position:relative;
    height:calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content: center;

    &:before{
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
        background-image: url('/images/login-background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        opacity:0.8;
    }
`;

const Content = styled.div`
    max-width:650px;
    padding:80px 40px;
    width:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:100px;

    .signup{
        width:100%;
        background:#0063e5;
        font-weight:bold;
        padding:17px 0;
        text-align:center;
        color:#f9f9f9;
        border-radius:4px;
        font-size:18px;
        cursor:pointer;
        letter-spacing:1.5px;
        margin:8px 0 12px;
        transition:all 250ms;

        &:hover{
            background:#0483ee;
        }
    }

    .description{
        font-size:11px;
        letter-spacing:1.5px;
        text-align: center;
        line-height:1.5;
    }

    .logoTwo{
        width:90%;
        padding:12px 0;
    }
`;