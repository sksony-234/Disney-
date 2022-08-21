import React from 'react'
import styled from 'styled-components';
// import {auth,provider} from "../firebase";

const Header = () => {
//     const handleAuth = ()=>{
//     auth.signInWithPopop(provider).then((result)=>{
//         console.log(result);
//     }).catch((error)=>{
//             alert(error.message);
//         });
//     };

    // const handleAuth = ()=>{}
  return (
    <HeaderContainer>
        <div className="logo"><img src="/images/logo.svg" alt="" /></div>
        <NavMenu>
            <a href="">
                <img src="/images/home-icon.svg" alt="" /><span>HOME</span>
            </a>
            <a href="">
                <img src="/images/search-icon.svg" alt="" /><span>SEARCH</span>
            </a>
            <a href="">
                <img src="/images/watchlist-icon.svg" alt="" /><span>WATCHLIST</span>
            </a>
            <a href="">
                <img src="/images/original-icon.svg" alt="" /><span>ORIGINALS</span>
            </a>
            <a href="">
                <img src="/images/movie-icon.svg" alt="" /><span>MOVIES</span>
            </a>
            <a href="">
                <img src="/images/series-icon.svg" alt="" /><span>SERIES</span>
            </a>
        </NavMenu>

        {/* <Login onClick={handleAuth}>Login</Login> */}
        <div className="userLogo"><img src="/images/Mypic.jpeg" alt="" /></div>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.nav`
    height:70px;
    background:#090b13;
    padding:0px 20px;
    display:flex;
    align-items:center;
    .logo{
        img{
            height:50px;
        }
    }

    .userLogo{
        img{
            height:48px;
            width:48px;
            border-radius:50%;
        }
    }
`;

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:37px;
    a{
        margin:0 17px;
        display:flex;
        align-items: center;
        img{
            height:20px;
        }
        span{
            position:relative;
            font-size:13px;
            letter-spacing: 1.4px;
            margin-left:3px;
            &:after{
                content:"";
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                height:2px;
                background:#fff;
                opacity:0;
                transform:scaleX(0);
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform-origin:left center;
            }
        }
        &:hover{
            span:after{
                opacity:1;
                transform:scaleX(1);
            }
        }
    }
`;

const Login  = styled.button`
    color:black;
    padding:7px 14px;
`