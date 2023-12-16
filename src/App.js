import "./App.css";
import {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes} from "./routes";
import {DefaultLayout} from "./layouts/DefaultLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Conversation from "./pages/Conversation/Conversation";
import ConversationChannel from "./components/Conversation/ConversationChannel";

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
                {/*<Routes>*/}
                {/*    <Route path="conversations" element={<Conversation/>}>*/}
                {/*        <Route path=":id" element={<ConversationChannel/>}/>*/}
                {/*    </Route>*/}
                {/*</Routes>*/}
            </div>
        </Router>

    );
}

export default App;
