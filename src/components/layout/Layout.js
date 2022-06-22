import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <div className="container border-box items-center mx-auto w-full h-screen overflow-hidden">
      <main className="h-screen">
        <MainHeader />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
