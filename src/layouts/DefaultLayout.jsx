import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};