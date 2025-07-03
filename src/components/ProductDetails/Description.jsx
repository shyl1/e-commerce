export default function Description({ description, showFull, setShowFull }) {
  return (
    <div className="pt-6">
      <h2 className="text-base font-semibold mb-3">Product Details:</h2>
      <p className="text-sm text-[#595959] leading-7">
        {showFull ? description : description.slice(0, 140) + "..."}
      </p>
      {description.length > 140 && (
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-[#35AFA0] text-sm underline mt-1 cursor-pointer"
        >
          {showFull ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
