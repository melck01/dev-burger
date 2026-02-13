import React from "react";
import { useState, useEffect } from "react";
import { GlobalStyle } from "../../styles/global";
import { Container, Img, Div, H1, Button, User } from "./styles"
import burguerseler from "../../assets/burgerseler.png"
import trash from "../../assets/18297 4.png"
import axios from 'axios'
import { useNavigate } from "react-router-dom";


//JSX
const Orders = () => {
  // const orders = []

  const navigate = useNavigate();

  function goToHome(){
    navigate('/')
  }

  const [orders, setOrders] = useState([]);

  useEffect(() => {
  async function fetchOrders() {
    const { data } = await axios.get("http://localhost:3001/orders");
    setOrders(data);
  }

  fetchOrders();
}, []);


 async function deleteOrder(orderId) {
      await axios.delete(`http://localhost:3001/orders/${orderId}`)
  const newOrders = orders.filter(order => order.id !== orderId)
      setOrders(newOrders)
  }


  return (

    <>
      <GlobalStyle />
      <Container>
        <Div className="img">
          <Img src={burguerseler}></Img>
        </Div>
        <Div>
          <H1>Pedidos</H1>
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
        <Div>
          <Button onClick={goToHome} className="pedido">
            Voltar
          </Button>
        </Div>
      </Container>
    </>
  )
}

export default Orders