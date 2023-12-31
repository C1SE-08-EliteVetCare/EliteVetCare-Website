import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Toaster} from "sonner";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider} from "@material-tailwind/react";
import {AuthProvider} from "./context/authContext";
import {Provider} from 'react-redux';
import store from './redux/store'
import {SocketProvider} from "./context/socketContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <SocketProvider>
            <AuthProvider>
                <ThemeProvider>
                    <Toaster richColors position="top-right" closeButton duration="2000" toastOptions={{
                        style: {fontSize: '15px', width: 'fit-content', right: 0}
                    }}/>
                    <ToastContainer
                        position="top-right"
                        autoClose={4500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    ></ToastContainer>
                    <App/>
                </ThemeProvider>
            </AuthProvider>
        </SocketProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
