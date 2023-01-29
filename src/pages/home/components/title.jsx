export default function Title({ children }) {
  return (
    <div>
      <h1 className="font-bold text-center text-3xl">{children}</h1>
      <div className="mx-auto w-40 h-1 bg-blue-theme"></div>
    </div>
  );
}
