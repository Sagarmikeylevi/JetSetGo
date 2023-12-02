import { Link } from "react-router-dom";
import Card from "./UI/Card";

const OnBoardList = () => {
  return (
    <Card className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      <div className="mt-2 w-[90%] h-[75%] absolute top-[20%] md:top-[12%] left-[50%] translate-x-[-50%] flex flex-col space-y-8 items-center justify-center md:flex-row md:space-x-12 md:space-y-0">
        <Link
          to={`passengers?isConform=${true}`}
          className="w-[16rem] h-[5rem] bg-green-400 text-white font-xl rounded-md font-thin uppercase cursor-pointer flex items-center justify-center"
        >
          Conform Passengers
        </Link>

        <Link
          to={`passengers?isConform=${false}`}
          className="w-[16rem] h-[5rem] bg-red-400 text-white font-xl rounded-md font-thin uppercase cursor-pointer flex items-center justify-center"
        >
          Non-Conform Passengers
        </Link>
      </div>
    </Card>
  );
};

export default OnBoardList;
