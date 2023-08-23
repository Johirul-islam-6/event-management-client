
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
 

  return (
    <>
     <ToastContainer 
     autoClose={2000}
     />

    <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
