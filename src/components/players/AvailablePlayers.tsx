import { type Dispatch, type SetStateAction } from "react";
import type { IPlayerType } from "../../Types/type";
import PlayerCard from "./PlayerCard";

interface IAvailableProps{
    players: IPlayerType[]
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: IPlayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>;
}

const AvailablePlayers = ({ 
  players, 
  coin, 
  setCoin,
  selectedPlayers, 
  setSelectedPlayers
}:IAvailableProps) => {

  return (
    <div className="grid grid-cols-3 gap-10 mt-8">
      {players.map((player: IPlayerType, index:number) => {
        return <PlayerCard
         key={index} 
         player={player} 
         coin={coin} 
         setCoin={setCoin}
         selectedPlayers={selectedPlayers}
         setSelectedPlayers={setSelectedPlayers}
        />;
      })}
    </div>
  );
};

export default AvailablePlayers;
