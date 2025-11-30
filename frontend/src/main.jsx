import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Subscription from './pages/Subscription';
import Checkout from './pages/Checkout'
import Checkout2 from './pages/Checkout2';
import Payments from './components/Payment/Payments';
import ViewSubscription from './components/Payment/ViewSubscription';
import Transaction from './components/Payment/Transaction';
import Dashboard from './Dashboard.jsx';
import GymLocation from './components/Homepage/GymLocation.jsx';
import GymLocationPage from './pages/Dashboard/GymLocationPage.jsx';
import FacilityPage from './pages/Dashboard/FacilityPage.jsx';
import SubscriptionPage from './pages/Dashboard/SubscriptionPage.jsx';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import GymPage from './pages/Dashboard/GymPage.jsx';




const router = createBrowserRouter([
  
  {
    path: '/',
    element: <App />,
    children: [

      {
        path: "/",
        element: (
          <>

            <Home />

          </>
        ),
      },
      {
        path: "/category",
        element: (
          <>

            <Categories />

          </>
        ),
      },
      {
        path: "/detail",
        element: (
          <>

            <Detail />

          </>
        ),
      },
      {
        path: "/subscription",
        element: (
          <>

            <Subscription />

          </>
        ),
      },
      {
        path: "/checkout",
        element: (
          <>

            <Checkout />

          </>
        ),
      },
      {
        path: "/booking",
        element: (
          <>

            <Checkout2 />

          </>
        ),
      },
      {
        path: "/payment",
        element: (
          <>

            <Payments />

          </>
        ),
      },
      {
        path: "/viewsubscription",
        element: (
          <>

            <ViewSubscription />

          </>
        ),
      },
      {
        path: "/ticket",
        element: (
          <>

            <Transaction />

          </>
        ),
      },
    ]
  },
  {
  path:'/dashboard',
  element:<Dashboard/>,
  children:[
    {
      path:'gym-location',
      element: <GymLocationPage/>
    },
    {
      path:'facilities',
      element:<FacilityPage/>
    },
    {
      path:'subscription',
      element:<SubscriptionPage/>
    },
    {
      path:'gym',
      element:<GymPage/>
    }
  ]
}
]);


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
    
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
