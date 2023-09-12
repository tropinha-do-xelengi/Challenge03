import React from 'react' 
import ReactDOM from 'react-dom/client' 
import App from './App.jsx' 

// Aplicação de rotas 

    import { createBrowserRouter, RouterProvider } from 'react-router-dom'
    import Erro404 from './routes/Erro404.jsx'
    import Home from './routes/HomePorto.jsx'
    import Vistoria from './routes/Vistoria.jsx'

    const router = createBrowserRouter ([
      { path: '/', elements: <App/>,
        errorElement: <Erro404/>, 
        children: [
          { path: '/', element: <Home/> },
          { path: '/home', element: <Vistoria/> }
        ]}   ])


  //Termino rotas

  

  ReactDOM.createRoot(document.getElementById('root')).render( 

  <React.StrictMode> 
    <RouterProvider router={router}/> 
  </React.StrictMode>, 

  ) 