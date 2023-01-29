export default function Title({ children, width }) {
  return (
    <div>
      <h1 className="font-bold text-center text-3xl">{children}</h1>
      <div className={`mx-auto w-40 h-0.5 bg-blue-theme ${width}`}></div>
    </div>
  );
}
