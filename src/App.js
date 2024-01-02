import "./App.css";
import React, {Fragment, useContext, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes} from "./routes";
import {DefaultLayout} from "./layouts/DefaultLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {toast} from "sonner";
import SocketContext from "./context/socketContext";
import Notification from "./components/Notification/Notification";

function App() {
    const socket = useContext(SocketContext)
    const accessToken = localStorage.getItem('access-token')

    useEffect(() => {
        if (accessToken) {
            socket.on('onAppointmentCreate', (data) => {
                toast(<Notification type="createAppointment" id={data?.appointmentDetail?.id} />)
            })
            socket.on('onAppointmentStatus', (data) => {
                toast(<Notification type="statusAppointment" appointment={data?.appointmentDetail} />)
            })
        }
    }, [accessToken, socket])

    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page/>
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
