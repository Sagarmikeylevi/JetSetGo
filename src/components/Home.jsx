import heroIcon from "../assets/hero_icon.png";
import Card from "./UI/Card";

const Home = () => {
  return (
    <Card className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      {/* body */}
      <div className="mt-2 w-[90%] h-[75%] absolute top-[20%] md:top-[12%] left-[50%] translate-x-[-50%] md:flex md:flex-row lg:w-[80%]">
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center  space-y-[2rem] md:w-[60%]">
          <div className="px-4 flex flex-col">
            <p className="text-red-500 text-lg font-semibold mb-4 lg:text-xl">
              Beyond Boundaries, Beyond Expectations
            </p>

            <h1 className="text-[#003300] text-[3rem] font-extrabold uppercase leading-[3.5rem] lg:text-[3.5remrem]lg:leading-[4rem]">
              Enjoy your travel the best way
            </h1>
            <p className="mt-4 text-[#000000] tracking-wide lg:text-lg">
              Where travel dreams take flight. Your gateway to seamless
              adventures awaits, making every trip unforgettable.
            </p>
          </div>

          <div className="md:absolute left-6 bottom-[-1rem] lg:bottom-0">
            <p className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-black transition-all duration-200 cursor-pointer lg:px-6">
              Book Now
            </p>
          </div>
        </div>

        <div className="hidden w-[40%] h-[100%] md:flex items-center justify-center mt-6 relative">
          <img src={heroIcon} alt="img_1" className="h-[22rem] w-[22rem]" />

          <img
            src="https://cdn-icons-png.flaticon.com/128/1350/1350222.png"
            alt="plane_1"
            className="h-[2rem] w-[2rem] absolute left-[10%] top-[50%]"
          />

          <img
            src="https://cdn-icons-png.flaticon.com/128/1350/1350222.png"
            alt="plane_2"
            className="h-[2rem] w-[2rem] absolute left-[80%] top-[20%]"
          />
        </div>
      </div>
      {/* body end */}
    </Card>
  );
};

export default Home;
