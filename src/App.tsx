import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';
import Main from './components/layouts/main';
const Products = lazy(() => import("./pages/products"));
import { Toaster } from './components/ui/sonner';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter(
 createRoutesFromElements(
    <>
       <Route element={<Main />}>
          <Route path="/" element={<Products />} />
       </Route>
    </>,
 ),
);

function App() {
  return (
    <div className=''>
      <ToastContainer />
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
