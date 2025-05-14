export default function Card({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={ref}
      className="p-8 bg-violet-200 rounded-2xl cursor-grab opacity-0 transition-opacity duration-1000"
    >
      Card de test
    </div>
  );
}
