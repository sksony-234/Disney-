import React from 'react';
import styled from 'styled-components';

const Viewers = () => {
  return (
    <ViewersContainer>
        <div className="img">
              <img src="/images/viewers-disney.png" alt="" />
        </div>
        <div className="img">
              <img src="/images/viewers-pixar.png" alt="" />
        </div>
        <div className="img">
              <img src="/images/viewers-marvel.png" alt="" />
        </div>
        <div className="img">
              <img src="/images/viewers-starwars.png" alt="" />
        </div>
        <div className="img">
              <img src="/images/viewers-national.png" alt="" />
        </div>
    </ViewersContainer>
  )
}

export default Viewers;

const ViewersContainer = styled.section`
    margin-top:30px;
    display:grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap:25px;
    padding:30px 0px 26px;
    /* overflow-x:hidden; */
    .img{
        border:3px solid rgba(249, 249, 249, 0.1);
        border-radius:10px;
        box-shadow:0px 26px 30px -10px rgba(0, 0, 0, 0.69), 0px 16px 10px -10px rgba(0, 0, 0, 0.73);
        cursor:pointer;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }

        &:hover{
            box-shadow:0px 40px 58px -16px rgba(0, 0, 0, 0.8), 0px 30px 22px -10px rgba(0, 0, 0, 0.72);
            border-color:rgba(249, 249, 249, 0.8);
            transform:scale(1.05)
        }
    }
`;