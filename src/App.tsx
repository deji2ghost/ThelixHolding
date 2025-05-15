import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main from './components/layouts/main';
import Products from './pages/products';

const router = createBrowserRouter(
 createRoutesFromElements(
    <>
       <Route element={<Main />}>
          <Route path="/" element={<Products />} />
          {/* <Route path="onboarding" element={<Onboarding />} /> */}
       </Route>
    </>,
 ),
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
