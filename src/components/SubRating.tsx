import { useEffect, useState } from 'react';

type SubRatingType = {
  handleSub: (nbr: number) => void;
  range: number[];
};

export const SubRating = ({ handleSub, range }: SubRatingType) => {
  const [popup, setPopup] = useState<boolean>(false);
  const [rateInput, setRateInput] = useState<number>(0);
  const handleCheck = () => {
    if (rateInput == 0) {
      setPopup(true);
    }
    handleSub(rateInput);
  };

  useEffect(() => {
    if (popup) {
      setTimeout(() => {
        setPopup(false);
      }, 2000);
    }
  }, [popup]);

  return (
    <div className="flex flex-col">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <img src="./images/icon-star.svg" alt="star" />
      </div>
      <h2 className="text-xl font-semibold mt-6">How did we do?</h2>
      <p className="text-sm font-light text-white/50 my-4">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between">
        {range.map((rates) => (
          <button
            key={rates}
            onClick={() => setRateInput(rates)}
            className={`w-10 h-10 rounded-full flex items-center justify-center drop-shadow-md ${
              rateInput === rates
                ? 'bg-orange-500 text-white font-semibold'
                : 'bg-white/10 text-white/50 hover:bg-gray-500 hover:text-white'
            }`}
          >
            {rates}
          </button>
        ))}
      </div>
      <button
        onClick={handleCheck}
        className="uppercase w-full bg-orange-500 rounded-3xl py-2 text-sm font-semibold drop-shadow-md mt-6 tracking-wider hover:scale-95 hover:bg-white hover:text-orange-500"
      >
        Submit
      </button>
      <div
        className={`bg-orange-500 text-white absolute top-4 right-4 rounded-3xl py-1 px-4 drop-shadow-md transition-all duration-200 ease-in-out ${
          popup ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        Can you choose value?
      </div>
    </div>
  );
};
