import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <h1>{children}</h1>
    </>
  );
}

export default Layout;
