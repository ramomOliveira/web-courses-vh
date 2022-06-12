import type { NextPage } from 'next';
import Head from 'next/head';
import FooterHome from '../components/Home/FooterHome';

import HeaderHome from '../components/Home/HeaderHome';
import { Container } from '../styles/home/style';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
    </Head>
    <Container>
      <HeaderHome />
      <FooterHome />
    </Container>
  </>
);

export default Home;
