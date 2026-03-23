import DotGrid from "./DotGrid";

const SplashScreen = ({ onFinish }) => {
  return (
    <div
      className="h-screen w-full bg-black relative"
      onClick={onFinish}
    >
      <DotGrid
        dotSize={5}
        gap={13}
        baseColor="#271E37"
        activeColor="#00ff88"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-8xl font-extrabold tracking-tighter animate-bounce bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
  Bino
</h1>
        <p className="mt-3 text-sm">Click anywhere to Start</p>
      </div>
    </div>
  );
};

export default SplashScreen;