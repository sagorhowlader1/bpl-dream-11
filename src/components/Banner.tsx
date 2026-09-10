import BannerHero from "../assets/banner-main.png";
import BgShadow from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div
      className=" border rounded-2xl my-8 container h-[410px] bg-center bg-cover mx-auto border-none bg-[#131313]"
      style={{ backgroundImage: `url(${BgShadow})` }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <img src={BannerHero} alt="Cricket" className="my-5" />
        <h2 className="font-bold text-3xl my-2 text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-[#FFFFFF] font-medium text-[24px] mb-2">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="btn btn-success mb-5 font-bold">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
