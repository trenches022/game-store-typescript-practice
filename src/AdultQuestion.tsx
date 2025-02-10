import { FC } from "react";

interface AdultOrNotProps {
    setIsAdult: (value: boolean) => void;
};

const AdultOrNot: FC<AdultOrNotProps> = ({ setIsAdult }) => {
  const yesHandler = () => {
      setIsAdult(true);
  };

  const noHandler = () => {
      setIsAdult(false);
  };

  return (
      <div className="adult-check">
          <h2>Are You 18+ years old?</h2>
          <button onClick={yesHandler} className="adult-check-btn">Yes</button>
          <button onClick={noHandler} className="adult-check-btn">No</button>
      </div>
  )
}

export default AdultOrNot;