import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)


// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './layout/layout.jsx'
// import Home from './pages/Home'
// import About from './pages/About'

// export let router = createBrowserRouter([
//     {
//         path:"/",
//         element:<Layout/>,
//         children:[
//             {
//                 path:"",
//                 element:<Home/>
//             },
//             {
//                 path:"",
//                 element:<About/>
//             }
//         ]
//     }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <RouterProvider router={router}/>
//     </Provider>
// )
