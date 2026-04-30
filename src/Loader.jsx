const Loader = () => (
  <div className="flex items-center justify-center h-[700px] w-full">
    <div className="relative">
      {/* Outer Ring */}
      <div className="w-24 h-24 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
      <p className="absolute left-1/2 transform -translate-x-1/2 pt-4 text-lg text-orange-200 font-bold">Loading...</p>
    </div>
  </div>
);

export default Loader;