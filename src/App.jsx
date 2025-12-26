import { useState } from "react";

export default function App() {
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    setRating(formData.get("rating"));
    setLoading(true);
  }

  const ratings = [
    {
      id: "rating_1",
      value: 1,
    },

    {
      id: "rating_2",
      value: 2,
    },

    {
      id: "rating_3",
      value: 3,
    },

    {
      id: "rating_4",
      value: 4,
    },
    {
      id: "rating_5",
      value: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-grey-950 flex items-center justify-center px-4 py-6">
      {submitted && (
        <div className="animate-fade-in bg-grey-900/40 max-w-md md:rounded-4xl rounded-lg p-5 md:p-7 space-y-7 text-center">
          <div className="flex items-center justify-center flex-col gap-5 mb-10">
            <img src="/images/illustration-thank-you.svg" alt="" />
            <span className="inline-block text-orange-500 rounded-full py-2 px-3 bg-grey-900">
              You selected
              {` ${rating} `}
              out of 5
            </span>
          </div>
          <div className="space-y-5">
            <h1 className="text-white text-3xl font-bold md:text-4xl">
              Thank you!
            </h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don&apos;t hesitate to get in touch!
            </p>
          </div>
        </div>
      )}
      {!submitted && (
        <form
          onSubmit={handleSubmit}
          className={`bg-grey-900/40 max-w-md md:rounded-4xl rounded-lg p-5 md:p-7 space-y-7 ${loading && "animate-fade-out"}`}
          onAnimationEnd={() => {
            setSubmitted(true);
            setLoading(false);
          }}
        >
          <div className="rounded-full p-3 md:p-4 bg-grey-900 w-fit">
            <img
              src="/images/icon-star.svg"
              className="size-3.5 md:size-4"
              alt=""
            />
          </div>
          <h1 className="text-white text-3xl font-bold md:text-4xl">
            How did we do?
          </h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex gap-4 items-center justify-between">
            {ratings.map((rating) => {
              const { id, value } = rating;

              return (
                <div key={id}>
                  <input
                    type="radio"
                    name="rating"
                    id={id}
                    value={value}
                    className="sr-only peer"
                    required
                  />
                  <label
                    htmlFor={id}
                    className="
            rounded-full size-14 cursor-pointer text-center flex items-center justify-center bg-grey-900 font-bold hover:bg-orange-500 hover:text-grey-950 peer-checked:text-grey-950 peer-checked:bg-white text-lg/loose
          "
                  >
                    {value}
                  </label>
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full font-bold tracking-widest text-lg py-4 uppercase hover:bg-white bg-orange-500 text-grey-950 disabled:cursor-not-allowed cursor-pointer"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
