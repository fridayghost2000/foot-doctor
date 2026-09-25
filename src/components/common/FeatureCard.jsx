export function FeatureCard({ icon, title, text }) {
  return (
    <div className="border-t border-[#dce5e0] pt-5">
      <div className="mb-4 text-[#66877d]">{icon}</div>
      <h3 className="font-serif text-xl text-[#163b4a]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#617572]">{text}</p>
    </div>
  )
}
