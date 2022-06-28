import React from 'react'
import styled from 'styled-components'

const Movies = () => {
  return (
    <Container>
        <h4>Reconmended for you</h4>
        <Content>
            <div className="img">
                  <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40" alt="" />
            </div>
            <div className="img">
                  <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40" alt="" />
            </div>
            <div className="img">
                  <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40" alt="" />
            </div>
            <div className="img">
                  <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40" alt="" />
            </div>
            <div className="img">
                  <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40" alt="" />
            </div>
            <div className="img">
                  <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40" alt="" />
            </div>
            <div className="img">
                  <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40" alt="" />
            </div>
            <div className="img">
                  <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40" alt="" />
            </div>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.section`

`;

const Content = styled.div`
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap:25px;
    padding: 20px 0px 26px;
    overflow-x: hidden;
    .img{
        border:3px solid rgba(249, 249, 249, 0.1);
        border-radius:10px;
        box-shadow:0px 26px 30px -10px rgba(0, 0, 0, 0.69), 0px 16px 10px -10px rgba(0, 0, 0, 0.73);
        cursor:pointer;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        overflow: hidden;
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