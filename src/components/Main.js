import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';


const Main = () => {
    return (
        <Container as="main" fluid>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/model/:idmodel" element={<ItemListContainer/>} />
                <Route path="/products/:idmodel" element={<ItemDetailContainer/>} />
                
            </Routes>
        </Container>
    );
}

export default Main;