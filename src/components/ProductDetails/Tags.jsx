import tagIcon from "../../assets/icons/svgs/tag.svg";

export default function Tags({ tags }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      <span className="flex items-center gap-1.5 text-black/80 text-base">
        <img src={tagIcon} alt="tag" className="mt-1" /> Tags:
      </span>
      {tags.map((tag, i) => (
        <span key={i} className="border border-[#E5E7EB] text-[#595959] text-sm font-medium py-1.5 px-2.5 rounded-sm hover:bg-[#35AFA0] hover:text-white transition capitalize">
          {tag}
        </span>
      ))}
    </div>
  );
}
