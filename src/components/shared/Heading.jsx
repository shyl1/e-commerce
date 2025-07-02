
export default function Heading({header , text}) {
  return (
    <div>
      <div className="text-base font-semibold">{header}</div>
      <div className="text-xs text-[#9B9BB4]">
        {text}
      </div>
    </div>
  )
}
