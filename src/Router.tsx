import { Route, Routes } from 'react-router-dom';
import { Checkout } from './pages/Checkout';
import { Confirmed } from './pages/Confirmed';
import { Home } from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/confirmed' element={<Confirmed />} />
    </Routes>
  );
}
