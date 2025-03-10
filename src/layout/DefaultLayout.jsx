import { Outlet } from "react-router-dom";
import ToasterProvider from "@/shared/Toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AuthProvider } from "@/context/auth";

const DefaultLayout = () => {
  return (
    <>
      <AuthProvider>
        <ToasterProvider />
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
};
export default DefaultLayout;