import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { userStore } from './redux/userStore';
import MyApp from './myApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceworker.js')
      .then(registration => console.log("service registered"))
      .catch(err => console.log('error with registering')

      )
  })
}
root.render(
  <Provider store={userStore}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
  // <MyApp/>
);

