import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Navbar = ({coin}: {coin:number}) => {
  return (
    <nav className=" bg-[#092328] text-white">
        <div className="flex justify-between items-center container mx-auto">
               <a href="#">
                 <img src={Logo} alt="Logo" className="cursor-pointer" />
               </a>

                <ul className="flex gap-4 items-center">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#fixture">Fixture</a>
                    </li>
                    <li>
                        <a href="#teams">Teams</a>
                    </li>
                    <li>
                        <a href="#schedules">Schedules</a>
                    </li>
                </ul>

                <h2 className="flex gap-2 items-center font-bold text-2xl">
                    <AiFillDollarCircle /> {coin}</h2>
        </div>
    </nav>
  );
};

export default Navbar;
