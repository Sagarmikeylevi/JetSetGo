import Card from "./UI/Card";

const SearchedFlights = () => {
  return (
    <Card className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      <div className="absolute top-[15%] w-[100%] h-[85%] flex flex-col justify-center items-center space-y-4">
        {/* section - 1 */}
        <div className="w-full h-[15%] flex flex-row justify-center items-center space-x-4">
          <div className="flex flex-col justify-center space-y-[-5px]">
            <p className="text-lg font-semibold text-green-900">DEL</p>
            <p className="text-sm font-medium text-green-900 opacity-80">
              India
            </p>
          </div>

          <div className="w-[20%] border-b-2 border-b-green-600 border-dashed"></div>

          <img
            src="https://cdn-icons-png.flaticon.com/128/3097/3097160.png"
            alt="plane_icon"
            className="h-8 w-8"
          />

          <div className="w-[20%] border-b-2 border-b-green-600 border-dashed"></div>

          <div className="flex flex-col justify-center space-y-[-5px]">
            <p className="text-lg font-semibold text-green-900">MUM</p>
            <p className="text-sm font-medium text-green-900 opacity-80">
              India
            </p>
          </div>
        </div>
        {/* section - 1 end */}
        {/* section - 2 */}
        <div className="h-[15%] w-full flex flex-row justify-center items-center space-x-4 md:space-x-8">
          <div className="h-full w-[15%] max-w-[6rem] bg-green-600 rounded-md shadow-md flex flex-col text-white justify-center items-center opacity-70">
            <p className="text-2xl font-semibold">17</p>
            <p className="uppercase font-thin text-sm">Sept</p>
          </div>

          <div className="h-full w-[15%] max-w-[6rem] bg-green-900 rounded-md shadow-md flex flex-col text-white justify-center items-center">
            <p className="text-2xl font-semibold">17</p>
            <p className="uppercase font-thin text-sm">Sept</p>
          </div>

          <div className="h-full w-[15%] max-w-[6rem] bg-green-600 rounded-md shadow-md flex flex-col text-white justify-center items-center">
            <p className="text-2xl font-semibold">17</p>
            <p className="uppercase font-thin text-sm">Sept</p>
          </div>

          <div className="h-full w-[15%] max-w-[6rem] bg-green-600 rounded-md shadow-md flex flex-col text-white justify-center items-center">
            <p className="text-2xl font-semibold">17</p>
            <p className="uppercase font-thin text-sm">Sept</p>
          </div>

          <div className="h-full w-[15%] max-w-[6rem] bg-green-600 rounded-md shadow-md flex flex-col text-white justify-center items-center">
            <p className="text-2xl font-semibold">17</p>
            <p className="uppercase font-thin text-sm">Sept</p>
          </div>
        </div>
        {/* section - 2 end */}
        {/* section - 3*/}
        <div className="h-[60%] w-[95%] flex flex-col space-y-2 items-center p-4 bg-[#e6e6e6] rounded-md">
          {/* flight-1 */}
          <div className="max-w-[45rem] w-full min-h-[6rem] rounded-md bg-[#f5f5f5] shadow-md flex flex-row items-center px-8 relative cursor-pointer justify-between">
            <div className="flex flex-row space-x-1 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11264/11264544.png"
                alt="airlines_logo"
                className="w-8"
              />
              <p class="font-semibold text-green-900 tracking-wide">
                <span class="font-bold text-xl">A</span>irAsia
              </p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-1 text-green-900">
              <p className="font-bold text-2xl ">7:00</p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3248/3248150.png"
                alt="arrow"
                className="w-12"
              />
              <p className="font-semibold">9:00</p>
            </div>

            <div className="text-lg text-green-900 flex flex-row items-center space-x-[1px]">
              <span className="text-2xl font-semibold">$</span>
              <span>25000</span>
            </div>

            <p className="absolute top-0 left-[105%] translate-x-[-105%] px-4 py-2 bg-[rgba(30,69,43,0.8)] rounded-md text-white text-xs">
              Economy
            </p>
          </div>
          {/* flight-1 end */}
        </div>
        {/* section - 3 end */}
      </div>
    </Card>
  );
};

export default SearchedFlights;
