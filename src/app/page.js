export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-black">
      <div
        style={{
          backgroundImage: `url("/images/bg.svg")`,
        }}
        className="fixed z-0 w-full h-full bg-cover opacity-60"
      />
      <div className="z-50 flex flex-col items-center w-full h-full text-white">
        <span className="font-akira text-[32px] w-full text-center border-b">
          Shoey
        </span>
        <div className="flex flex-col justify-center w-full h-full py-20">
          <div className="flex flex-col items-center justify-center w-1/2">
            <span className="font-grotesk text-[50px]">SNEAKERS</span>
            <span className="font-grotesk text-[28px]">
              by the <i>Young</i>, for the <i>Youth</i>
            </span>
          </div>
        </div>
        <div className=""></div>
      </div>
    </main>
  );
}
