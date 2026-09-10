import { type Dispatch, type SetStateAction } from "react";
import { TbTrash } from "react-icons/tb";
import type { IPlayerType } from "../../Types/type";

interface ISelectedPlayerCardProps {
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  player: IPlayerType;
  selectedPlayers: IPlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>;
}

const SelectedPlayerCard = ({
  coin,
  setCoin,
  player,
  selectedPlayers,
  setSelectedPlayers,
}: ISelectedPlayerCardProps) => {
  const handleRemovePlayer = (player: IPlayerType) => {
    const resPlayers = selectedPlayers.filter(
      (selectedPlayers) => selectedPlayers.playerName != player.playerName,
    );

    setSelectedPlayers(resPlayers);

    const newCoinPrice = coin + player.price;
       setCoin(newCoinPrice);
  };

  
  return (
    <div className="flex gap-2 p-2 justify-between items-center rounded-2xl border border-gray-300">
      <div className="flex gap-2">
        <img
          className="h-[60px] w-[60px] gap-2 rounded-xl border border-gray-300"
          src={player.playerImage}
          alt=""
        />
        <div>
          <h2 className="font-semibold text-black text-xl">
            {player.playerName}
          </h2>
          <p className="text-[20px]">{player.playerType}</p>
        </div>
      </div>
      <span
        className="text-red-500 font-bold cursor-pointer"
        onClick={() => handleRemovePlayer(player)}
      >
        <TbTrash />
      </span>
    </div>
  );
};

export default SelectedPlayerCard;
