export default function CardPrograms({ icon, title, desc }) {
  return (
    <div className="bg-white drop-shadow-lg w-60 px-5 py-7 rounded-xl">
      <img src={icon} alt={icon} className="h-24 mx-auto" />
      <h2 className="text-xl text-center my-2 font-bold">{title}</h2>
      <p className="text-xs">{desc}</p>
    </div>
  );
}
