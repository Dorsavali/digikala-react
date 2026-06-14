import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import { Provider } from "react-redux";
import store from "./components/Redux/store.jsx";



createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <App />
</Provider>

)
