import { Outlet } from "react-router-dom";
import ToasterProvider from "@/shared/Toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";

const DefaultLayout = () => {
  return (
    <>
      <ToasterProvider />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default DefaultLayout;