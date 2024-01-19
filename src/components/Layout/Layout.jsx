import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { ContainerLayout, Header, ContainerMain } from "./layout.styled";
import Footer from "../Footer/Footer";
import CardAuto from "../CardAuto/CardAuto";

export const Layout = () => {
  return (
    <>
      <ContainerLayout>
        <Header>
          <NavBar />
        </Header>
        <ContainerMain>
          <Suspense>
            <Outlet />
          </Suspense>
          <CardAuto />
        </ContainerMain>
      </ContainerLayout>
      <Footer />
    </>
  );
};
