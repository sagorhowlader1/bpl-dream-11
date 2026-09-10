import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayerType } from "../../Types/type";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<IPlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }:PlayersProps ) => {
    const players = use(playersPromise)
    const [buttonType, setButtonType] = useState<"available" | "selected">("available"); // available or selected
    const [selectedPlayers, setSelectedPlayers] = useState<IPlayerType[]>([]);
        // console.log(buttonType)

    const handleUpdateBtnType = (type: "available" | "selected") => {
      setButtonType(type)
    }

    return (
      <div className="container mx-auto my-5">
      <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-2xl text-[#131313]">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
        
        <div>
          {/* available button */}
          <button
          onClick={() => handleUpdateBtnType("available")}
          className={`btn ${buttonType === "available" ? 'btn-success' : ""} rounded-r-none`}
          >
            Available</button>

          {/* selected button */}
          <button
          onClick={() => handleUpdateBtnType("selected")}
          className={`btn ${buttonType === "selected" ? 'btn-success' : ""} rounded-l-none`}
          >
            Selected</button>
        </div>
      </div>

        {buttonType === "available" ? (
          <AvailablePlayers
          players={players}
          coin={coin} 
          setCoin={setCoin} 
          selectedPlayers={selectedPlayers} 
          setSelectedPlayers={setSelectedPlayers}

          />
        ) : (
          <SelectedPlayers
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              coin={coin} 
              setCoin={setCoin}
           />
        )}
          
    </div>
    );
};

export default Players;

