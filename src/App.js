import "./App.css";
import {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes} from "./routes";
import {DefaultLayout} from "./layouts/DefaultLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ManageUserAccount from "./pages/Admin/ManageUserAccoun";
import DetailUserAccount from "./pages/Admin/DetailUserAccount";
function App() {
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
                <Routes>
                    <Route exact path="/admin/manageuseraccount" component={ManageUserAccount} />
                    <Route path="/admin/detailuseraccount/:id" component={DetailUserAccount} />
                </Routes>
            </div>
        </Router>

    );
}

export default App;
