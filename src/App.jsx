import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout';
import { ClientList } from './components/Client/ClientList';
import { ProductList } from './components/Product/ProductList';
import { OrderList } from './components/Order/OrderList';
import { PackList } from './components/Pack/PackList';
import { CompletedOrder } from './components/CompletedOperation/CompletedOrder';
import { Container } from './App.styled';

function App() {
  

  return (
    <>
      <Container>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='client' element={<ClientList/>}/>
            <Route path='product' element={<ProductList/>}/>
            <Route path='pack' element={<PackList/>}/>
            <Route path='order' element={<OrderList/>}/>
            <Route path='completed' element={<CompletedOrder/>}/>
          </Route>
        </Routes>  
      </Container>
    </>
  )
}

export default App
