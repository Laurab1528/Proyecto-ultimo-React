import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import CartWidget from "./CartWidget"

const Main = () => {
    return (
        <Container as="main" fluid>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/model/:idmodel" element={<ItemListContainer/>} />
                <Route path="/products/:id" element={<ItemDetailContainer/>} />
                <Route path="/CartWidget" element={<CartWidget/>} />
            </Routes>
        </Container>
    );
}

export default Main;