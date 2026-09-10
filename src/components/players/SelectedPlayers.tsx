import { type Dispatch, type SetStateAction } from 'react'
import type { IPlayerType } from '../../Types/type';
import SelectedPlayerCard from './SelectedPlayerCard';


interface ISelectedPlayersProps {
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: IPlayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>
}

const SelectedPlayers = ({
    coin,
    setCoin,
    selectedPlayers, 
    setSelectedPlayers,
}: ISelectedPlayersProps) => {

    if(selectedPlayers.length === 0){
      return <h2 className='font-bold text-2xl my-10 text-center'>No selected players</h2>
    }

    return (
    <div className="grid grid-rows-1 gap-10 mt-8">
      {/* Selected players */}

      {selectedPlayers.map((player:IPlayerType, index:number) => {
        return <SelectedPlayerCard 
        player={player}
        key={index}
        coin={coin} 
        setCoin={setCoin} 
        selectedPlayers={selectedPlayers} 
        setSelectedPlayers={setSelectedPlayers}/>
      })}
    </div>
  );
}

export default SelectedPlayers;
