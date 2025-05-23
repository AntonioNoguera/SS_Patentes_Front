import { createRoot } from 'react-dom/client';
import App from './lib/router/App';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import './lib/pages/index.css';

// —— Inicialización de mocks en desarrollo —— true -> Mocks habilitados
if (true) {
  import('./lib/api/mocks/axiosMockAdapter')
    .then(({ setupAxiosMocks }) => {
      setupAxiosMocks();
      console.log('✅ Axios mocks initialized');
    })
    .catch(err => {
      console.error('❌ Error initializing Axios mocks', err);
    });
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <BrowserRouter>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
