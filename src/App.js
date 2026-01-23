import React from "react";
import { useState, useRef } from "react";
import { GlobalStyle } from "./styles/global";
import { Container, Img, Div, H1, Input, Label, Field, Button, User } from "./styles/styles"
import burguer from "./assets/burger 1.png"
import trash from "./assets/18297 4.png"
import axios from 'axios'

//JSX
const App = () => {
  // const orders = []

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

  

  function deleteOrder(userId) {
      const newOrders = orders.filter(order => order.id !== userId)
      setOrders(newOrders)
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
          <Button onClick={addNewOrder} className="pedido">
            Novo Pedido
          </Button>
        </Div>
        <Div>
          <ul>
            {orders.map((order) => (

              <User key={order.id}>
                <div className="info">
                  <p className="order">{order.order}</p>
                  <p className="name">{order.name}</p>
                </div>
                <button onClick={() => deleteOrder(order.id)}> <img src={trash} alt="Excluir pedido" /> </button>
              </User>

            ))
            }
          </ul>
        </Div>
      </Container>
    </>
  )
}

export default App