import { Suspense, useState } from "react";
import type { IPlayerType } from "./Types/type";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Players from "./components/players/Players";
import Newslatter from "./components/players/NewsLatter";
import Footer from "./components/players/Footer";


const playersFetch = async (): Promise<IPlayerType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  // const [playersPromise] = useState(() => playersFetch());
  const [playersPromise] = useState(() => playersFetch());
  const [coin, setCoin] = useState(5000);
  return (
    <>
          <Navbar coin={coin}/>
          <Banner />
          <Suspense fallback={<div>Loading...</div>}>
          <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin} />
          </Suspense>
          <div className="relative mt-60">
          <Newslatter />
          <Footer />
          </div>
    </>
  )
}

export default App;
