import { createRoot } from 'react-dom/client';
import App from './lib/router/App';
import { BrowserRouter } from 'react-router-dom';

import './lib/pages/index.css';


import { SnackbarProvider } from 'notistack';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <BrowserRouter>
    <SnackbarProvider
      maxSnack={3} // Número máximo de notificaciones visibles al mismo tiempo
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right', // Posición de las notificaciones
      }}
    >
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
