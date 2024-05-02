import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}

export default Layout;
