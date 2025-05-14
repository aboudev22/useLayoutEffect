import { useLayoutEffect, useRef } from "react";
import Card from "./Card";

export default function App() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = "1"; // on passe à visible
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-blue-950 flex justify-center items-center">
      <Card ref={ref} />
    </div>
  );
}
