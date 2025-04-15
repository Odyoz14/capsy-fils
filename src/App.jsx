
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const capsuleRefs = useRef([]);
  const [fils, setFils] = useState([]);

  const updateFils = () => {
    const newFils = capsuleRefs.current.map((ref) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 + window.scrollX;
        const top = rect.top + window.scrollY;
        return {
          left: `${centerX - 1}px`,
          height: `${top}px`
        };
      }
      return { left: "0px", height: "0px" };
    });
    setFils(newFils);
  };

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      updateFils();
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener("resize", updateFils);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", updateFils);
    };
  }, []);

  return (
    <div>
      {/* Fils */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0">
        {fils.map((fil, index) => (
          <div
            key={index}
            className="absolute bg-gray-300"
            style={{ left: fil.left, height: fil.height, width: "2px", top: 0 }}
          />
        ))}
      </div>
      
  useEffect(() => {
    updateFils();
    window.addEventListener("resize", updateFils);
    return () => window.removeEventListener("resize", updateFils);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-sky-200 to-white min-h-screen overflow-hidden">
      <header className="text-center pt-10">
        <h1 className="text-5xl font-bold text-sky-800">Capsy</h1>
        <p className="text-xl text-sky-700 mt-2">Voyagez dans le temps avec vos souvenirs</p>
      </header>

      {/* Capsules */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {capsuleData.map((capsule, index) => (
          <img
            key={capsule.id}
            src="/capsule-floating.png"
            alt={`Capsule ${capsule.id}`}
            ref={(el) => (capsuleRefs.current[index] = el)}
            className="absolute h-28 animate-floating"
            style={{ top: capsule.top, left: capsule.left }}
          />
        ))}
      </div>
    </div>
  );
}

      {/* Section visible */}
      <section className="mt-[350px] px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-sky-800 mb-8">Comment fonctionne Capsy ?</h2>
        <div className="grid grid-cols-5 gap-4 justify-center">
          <div className="bg-sky-100 p-4 rounded-xl shadow">1<br/>👤<br/>Créer un compte</div>
          <div className="bg-pink-100 p-4 rounded-xl shadow">2<br/>✍️<br/>Créer une capsule</div>
          <div className="bg-violet-100 p-4 rounded-xl shadow">3<br/>📅<br/>Choisir une date</div>
          <div className="bg-green-100 p-4 rounded-xl shadow">4<br/>🔒<br/>Fermer la capsule</div>
          <div className="bg-yellow-100 p-4 rounded-xl shadow">5<br/>⏳<br/>Ouvrir plus tard</div>
        </div>
      </section>
    </div>
  );
}
