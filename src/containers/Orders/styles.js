import styled from "styled-components";


export const Container = styled.div `
    background: rgba(10, 10, 16, 1);
    min-height: 100vh;

`

export const P = styled.p `
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-self: center;
`

export const Img = styled.img `
    width: 342px;
    height: 354px;
    margin-top: 30px;
    margin-bottom: 25px;
    mask-image: radial-gradient(
    circle,
    rgba(0,0,0,1) 65%,
    rgba(0,0,0,0) 100%
  );

  -webkit-mask-image: radial-gradient(
    circle,
    rgba(0,0,0,1) 65%,
    rgba(0,0,0,0) 100%
  );
`

export const Div = styled.div `
    display: flex;
    justify-content: center;
    
`
 
export const H1 = styled.h1 `
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    align-self: center;
    margin-bottom: 76px;
`


export const Button = styled.button `
    width: 342px;
    height: 68px;
    background-color: rgba(255, 255, 255, 0.14);
    color: rgba(255, 255, 255, 1);
    font-size: 17px;
    font-weight: 700;
    line-height: 2.5px;
    text-align: center;
    cursor: pointer;
    border: none;
    margin-bottom: 20px;
    margin-top: 65px;
&.pedido {
    cursor: pointer;
}

&.pedido:hover {
    opacity: 0.5;
}

&.pedido:active {
    opacity: 0.8;
}
`

export const User = styled.li `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    background-color: rgba(255, 255, 255, 0.25);
    width: 342px;
    height: 101px;
    border-radius: 14px;
    border: none;
   padding: 17px;
    margin-bottom: 16px ;

button {
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
}
.order{
    color: rgba(255, 255, 255, 1);
    font-weight: 300;
    line-height: 100%;
    margin-bottom: 29px;
    margin-top: 17px;
    margin-left: 5px;
    font-size: 18px;

}

.name{
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 700;
    line-height: 100%;
}

`

