
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './Redux/store.js';


// Disable console warnings
console.warn = () => {};

ReactDOM.createRoot(document.getElementById('root')).render(
    
     <Provider store={store}>
         <App />
     </Provider>


          
  
)
