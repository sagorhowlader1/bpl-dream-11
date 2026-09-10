import { useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayerType } from "../../Types/type";
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

interface IPlayerCardProps {
  player: IPlayerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: IPlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>;
}

const PlayerCard = ({ 
  player, 
  coin, 
  setCoin,
  selectedPlayers,
  setSelectedPlayers,  
}: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  // console.log(coin, setCoin, "from card")

  const handleSelectedPlayer = () =>{
    setIsSelected(true);
    const newCoinPrice = coin - player.price;

    if(newCoinPrice >=0){
      setCoin(newCoinPrice);
      toast.success(`${player.playerName} is purchased successfully`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }else{
      toast.error("Coin is not enough to purchase!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }

    // Selected players Logic
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div>
      <div className="group  relative overflow-hidden rounded-[28px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
      {/* ================= IMAGE ================= */}
      <div className="relative  overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">
        <img
          src={player.playerImage}
          alt={player.playerName}
          className="h-150 w-full  transition-transform duration-700 group-hover:scale-100"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Player Type Badge */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg backdrop-blur-md">
            {player.playerType}
          </span>
        </div>

        {/* Player Number / Icon */}
        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md">
          <FaUser size={15} />
        </div>

        {/* Player Info On Image */}
        <div className="absolute bottom-5 left-5 right-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[3px] text-white/60">
            Cricket Player
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white">
            {player.playerName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
            <IoFlag />
            <span>{player.origin}</span>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">
        {/* Section Title */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-400">
            Player Details
          </h3>

          <span className="h-2 w-2 rounded-full bg-green-500"></span>
        </div>

        {/* Batting & Bowling */}
        <div className="grid grid-cols-2 gap-3">
          {/* Batting */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition duration-300 group-hover:bg-gray-100">
            <p className="mb-2 text-xs font-medium text-gray-400">BATTING</p>

            <p className="text-sm font-bold leading-5 text-gray-800">
              {player.battingStyle}
            </p>
          </div>

          {/* Bowling */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition duration-300 group-hover:bg-gray-100">
            <p className="mb-2 text-xs font-medium text-gray-400">BOWLING</p>

            <p className="text-sm font-bold leading-5 text-gray-800">
              {player.bowlingStyle}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-100" />

        {/* ================= PRICE + BUTTON ================= */}
        <div className="flex items-center justify-between gap-4">
          {/* Price */}
          <div>
            <p className="mb-1 text-xs font-medium text-gray-400">
              PLAYER PRICE
            </p>

            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-gray-500">$</span>

              <h2 className="text-3xl font-black text-gray-900">
                {player.price}
              </h2>
            </div>
          </div>

          {/* Choose Button */}
          <button
            onClick={() =>  handleSelectedPlayer()}
            className={`group/btn flex items-center gap-2 rounded-2xl cursor-pointer
             bg-gray-900 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300
              hover:bg-black hover:shadow-xl active:scale-95`}
              // disabled={isSelected === true ?true : false}
              // disabled={isSelected ? true : false}
                disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlayerCard;

// Hanson start code here

// import React from 'react';
// import type { IPlayerType } from '../../Types/type';
// import { FaUser } from 'react-icons/fa';
// import { IoFlag } from 'react-icons/io5';

// const PlayerCard = ({player}: {player: IPlayerType}) => {
//     return (
//        <div className="card bg-base-100 shadow-sm">
//             <figure>
//               <img
//                 src={player.playerImage}
//                 alt="Shoes"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title"> <FaUser />{player.playerName}</h2>

//               <div className=" flex justify-between items-center">
//                      <div className="text-black-400 mr-2">
//                         <IoFlag />
//                      </div>
//                     <p className="font-semibold ">{player.origin}</p>
//                 <button className="btn">{player.playerType}</button>
//               </div>
//                <div className="divider" />

//                <h2 className="font-bold text-xl">Rating</h2>

//                 <div className="flex justify-between items-center text-right gap-4">
//                 <h3 className="font-semibold ">{player.battingStyle}</h3>
//                 <p className="">{player.bowlingStyle}</p>
//               </div>

//               <div className="flex justify-between items-center gap-4">
//                 <h2 className="font-bold">Price: ${player.price}</h2>
//                 <button className="btn">Choose Player</button>
//               </div>
//             </div>
//           </div>
//     );
// };

// export default PlayerCard;

// Hanson finished code here
