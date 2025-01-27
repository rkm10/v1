import Main from "./_components/header";
import NeonBackground from "./_components/NeonBackground";

export default function Home() {
  return (
    <>
      <NeonBackground />

      {/* Content Container */}
      <div className="container mx-auto px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <Main />
      </div>
    </>
  );
}
