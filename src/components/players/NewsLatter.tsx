const Newslatter = () => {
  return (
    <div className="container mx-auto absolute left-[50%] -translate-x-1/2 -translate-y-1/2 -top-1/10
     justify-center items-center mt-20 border bg-gradient-to-b  from-white  via-gray-50-700 bg-[#2C2C2C]  border-white rounded-2xl">
      <div className=" p-4 w-full">
        <div className="rounded-xl bg-white p-4 py-20 shadow-lg">
          <h2 className="font-bold text-center text-3xl">
            Subscribe to our Newsletter
          </h2>
          <p className="text-center mt-2">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="mt-4 flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className=" rounded-xl border border-gray-300 px-2 py-2 w-80 outline-none"
            />
            <button className="btn btn-success">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
