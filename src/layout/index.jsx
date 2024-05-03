import Card from "../components/Card";
import DescProduct from "../components/DescProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Checkout from "../pages/Checkout";
import Details from "../pages/Details";

function Layout({ children }) {

  return (
    <>
      <Header></Header>
      {children}
      {<Details></Details> ? <></> : <Card></Card>}
      <DescProduct></DescProduct>
      <Footer></Footer>
    </>
  );
}

export default Layout;
