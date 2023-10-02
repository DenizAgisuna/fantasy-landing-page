// import { useState } from "react";
import Nav from "./navbar";
import Footer from "./footer";
import MoviesGrid from "./moviesGrid";
import "./App.css";
import Stats from "./stats";
import HeroArtistic from "./heroArtistic";
// import MainGrid from "./mainGrid";
// import CarouselMain from "./caroselMain";

function App() {
  // const [chart, setChart] = useState(0);
  let longDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur minima eum dolorum veritatis sed harum molestias rem at deserunt voluptate est, recusandae repellendus! Hic libero vero dolor mollitia blanditiis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos saepe alias laboriosam fugiat molestiae quia. Distinctio, nulla eos doloribus error delectus ratione animi aut dolorum debitis pariatur ea similique rem.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate ad voluptas vitae incidunt magni enim deleniti! Blanditiis totam reiciendis quaerat ipsa dolorum veniam sapiente ratione saepe? Impedit, aliquid alias?";
  let shortDescription =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint quia corrupti delectus nesciunt maiores aliquam eaque, assumenda illum ut? Nulla doloribus maxime et, exercitationem sequi adipisci consequatur voluptate necessitatibus!";

  return (
    <>
      <Nav></Nav>
      {/* <MainHero /> */}
      <HeroArtistic></HeroArtistic>

      {/* <CarouselMain></CarouselMain> */}

      {/* <HeroArtistic></HeroArtistic> */}
      <div className="conainer fluid w-10/12 m-auto">
        <Stats></Stats>
        <MoviesGrid></MoviesGrid>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
