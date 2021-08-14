import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";
import Player from '../components/Player';
import { Head } from 'next/document';

interface MainLayoutProps {
  title?: string;
  description?: string
}

const MainLayout: React.FC<MainLayoutProps>
  = ({
       children,
       title ,
       description
  }) => {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta name="description" content={'Тестовое описание'} />
      </Head>
      <Navbar />
      <Container style={{ margin: "90px auto" }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
