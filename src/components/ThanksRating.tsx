type ThanksRatingType = {
  rate: number;
  maxRate: number;
};

export const ThanksRating = ({ rate, maxRate }: ThanksRatingType) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="./images/illustration-thank-you.svg"
        alt="illustration thank you"
        className="scale-75"
      />
      <p className="rounded-3xl bg-white/10 py-1 px-4 text-orange-500 text-sm drop-shadow-md">
        You selected {rate} out of {maxRate}
      </p>
      <h2 className="text-xl font-semibold mt-6">Thank you!</h2>
      <p className="text-sm font-light text-white/50 mt-4 text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};
