import React from 'react';
import Menu from '../../components/Menu';
import initialData from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  const categorias = initialData.categorias;

  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain url="https://www.youtube.com/watch?v=Vmb1tqYqyII" />
      <Carousel ignoreFirstVideo={false} category={categorias[0]}/>
      <Carousel ignoreFirstVideo={false} category={categorias[1]}/>
      <Carousel ignoreFirstVideo={false} category={categorias[2]}/>
      <Carousel ignoreFirstVideo={false} category={categorias[3]}/>
      <Carousel ignoreFirstVideo={false} category={categorias[4]}/>
      <Carousel ignoreFirstVideo={false} category={categorias[5]}/>

      <Footer />
    </div>
  );
}

export default Home;
