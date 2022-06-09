import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/index.css'
import {Provider} from 'react-redux';
import {store} from './redux/store';
import theme from "@/components/ui/theme";
import {ThemeProvider} from "@emotion/react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
            <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
)
