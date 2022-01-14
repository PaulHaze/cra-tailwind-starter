import { Routes, Route } from 'react-router-dom';

import { Home } from '../views';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
