import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './Layout/DefaultLayout';
import { CompleteOrderPage } from './pages/CompleteOrder';
import { Home } from './pages/Home';
import { OrderConfirmed } from './pages/OrderConfirmed';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/completeOrder' element={<CompleteOrderPage />} />
        <Route path='/orderConfirmed' element={<OrderConfirmed />} />
      </Route>
    </Routes>
  );
}
