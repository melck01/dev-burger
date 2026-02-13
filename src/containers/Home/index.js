import React from "react";
import { useState, useRef } from "react";
import { GlobalStyle } from "../../styles/global";
import { Container, Img, Div, H1, Input, Label, Field, Button,} from "./styles"
import burguer from "../../assets/burger 1.png"
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

//JSX
const Home = () => {
  // const orders = []
  const navigate = useNavigate();

  function goToOrders(){
    navigate('/orders')
  }



  const inputOrder = useRef()
  const inputName = useRef()

  const [orders, setOrders] = useState([]);

  async function addNewOrder() {
  
    const {data: newOrder} = await axios.post("http://localhost:3001/orders", 
      { order:inputOrder.current.value, 
        name: inputName.current.value});
      

  //   // spread operator
    setOrders([...orders,  newOrder ])
    console.log(newOrder)
  }

  



  return (

    <>
      <GlobalStyle />
      <Container>
        <Div className="img">
          <Img src={burguer}></Img>
        </Div>
        <Div>
          <H1> Faça seu Pedido!</H1>
        </Div>
        <Div>
          <Field>
            <Label>Pedido</Label>
            <Input ref={inputOrder} placeholder="1 Coca-cola, 1-X-Tudo"></Input>
          </Field>
        </Div>
        <Div>
          <Field>
            <Label>Nome do Cliente</Label>
            <Input ref={inputName} placeholder="Melck Messias"></Input>
          </Field>
        </Div>
        <Div>
          <Button onClick={goToOrders} className="pedido">
            Novo Pedido
          </Button>
          
        </Div>
       
      </Container>
    </>
  )
}

export default Home