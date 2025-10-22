import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import './index.css'
import App from './App.jsx'
import { Box, Theme } from '@chakra-ui/react'
import TodoProvider from '../context/todoProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoProvider>
    <Provider>
      <Theme appearance="light">
        <Box background={'#FFF9FE'} >
          <App />
        </Box>
      </Theme>
    </Provider>
    </TodoProvider>
  </StrictMode>
)
