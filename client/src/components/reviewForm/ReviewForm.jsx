const ReviewForm = ({ handleSubmit, revText }) => {
  return (
    <>
      <form action="">
        <input
          type="text"
          ref={revText}
          className="mt-1 px-3 py-2 w-60 h-36 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="Your review here"
        />
        <button
          className="bg-slate-500 p-3 rounded-md my-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default ReviewForm;
