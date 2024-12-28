const Shimmer = () => {
  return (
    <div>
      <div className="bg-slate-800 w-[100%] flex flex-col items-center justify-center h-[40vh] gap-10">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 border-4 border-gray-300 rounded-full animate-spin border-t-blue-600"></div>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <h2 className="text-2xl text-white">
          Looking for great food near you...
        </h2>
      </div>

      <div className="flex justify-between mx-10 my-10">
        <div className="flex gap-5">
          <div className="w-[100px] bg-gray-300 h-[50px] rounded-3xl animate-pulse"></div>
          <div className="w-[100px] bg-gray-300 h-[50px] rounded-3xl animate-pulse"></div>
          <div className="w-[100px] bg-gray-300 h-[50px] rounded-3xl animate-pulse"></div>
        </div>
        <div className="w-[300px] bg-gray-300 h-[50px] rounded-3xl animate-pulse"></div>
      </div>

      <div className="flex flex-wrap mx-10 my-10 gap-9">
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
        <div className="w-[330px] bg-gray-300 h-[230px] rounded-3xl animate-pulse"></div>
      </div>
    </div>
  );
};
export default Shimmer;
