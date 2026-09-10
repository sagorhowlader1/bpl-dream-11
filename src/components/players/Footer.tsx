import FooterLogo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-[#092328] text-white pt-48">
      {/* image */}
      <div className=" flex items-center justify-center py-[50px]">
        <a href="#">
          <img src={FooterLogo} alt="" />
        </a>
      </div>

      {/* center context */}
      <div className="grid grid-cols-3 justify-between items-center container mx-auto">
        <div>
          <div className="">
            <h2 className="text-3xl">About Us</h2>
            <p className="text-xl py-4">
              <p className="text-xl py-2">We are a passionate team</p>
              <p className="text-xl py-2">dedicated to providing the best</p>
              <p className="text-xl py-2">services to our customers.</p>
            </p>
          </div>
        </div>

        <div className="my-7 ">
          <div>
            <h2 className="text-3xl py-5">Quick Links</h2>
            
                <div className="">
                    <li className="py-1 text-xl">
                        <a href="#">Home</a>
                    </li>
                    <li className="py-1 text-xl">
                        <a href="#">Services</a>
                    </li>
                    <li className="py-1 text-xl">
                        <a href="#">About</a>
                    </li>
                    <li className="py-1 text-xl">
                        <a href="#">Contact</a>
                    </li>
                </div>
          </div>
        </div>

        <div>
          <div>
            <div className="my-7">
              <h2 className="text-3xl py-5">Subscribe</h2>
              <p className="text-xl">
                Subscribe to our newsletter for the <br /> latest updates.
              </p>
            </div>

            <div className="flex w-full max-w-3xl overflow-hidden rounded">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-r-none text-2xl px-2 w-80 placeholder:text-gray-500 bg-white outline-none"
              />
              <button className="font-bold bg-gradient-to-r from-yellow-200 via-orange-700 to-pink-400 px-5 py-3 cursor-pointer text-2xl text-black rounded-l-none ">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className=" my-5 h-px bg-[#464B71]"></div>
        <p className="flex justify-center items-center text-center py-5">@2026 Your Company All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
