import React, {useEffect} from 'react'
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase'

const Home = () => {
  useEffect(() =>{
    db.collection('movies').onSnapshot((snapshot)=>{
      let tempMovies = snapshot.docs.map((doc)=>{
          console.log(doc.data());
          return { id:doc.id, ...doc.data() }
        })
      console.log(snapshot);
    })
  }, []);

  return (
    <HomeContainer>
        <ImageSlider/>
        <Viewers/>
        <Movies/>
    </HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;

    &:before{
      content:"";
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background: url('/images/home-background.png') center center/cover no-repeat fixed;
      z-index:-1;
    }
`;