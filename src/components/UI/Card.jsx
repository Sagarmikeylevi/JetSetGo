const Card = ({ children }) => {
  return (
    <div className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      {children}
    </div>
  );
};

export default Card;
