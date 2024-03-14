import Header from "./components/header";
import NavigationLink from "./components/navigation";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="grid h-screen place-items-center grid-cols-2 gap-8 justify-center mx-auto px-8">
          <div className="space-y-3 max-w-[620px] w-full">
            <div className="border-b-2 border-black">
              <span className="text-xs text-left uppercase">
                CREATIVE + TECHONOLOGY
              </span>
            </div>
            <h1 className="font-black text-6xl">GABRIEL HIDEAKI</h1>
            <h2 className="font-light text-xl block">FRONT END DEVELOPER AND UI DESIGNER SOLVING PROBLEMS CREATIVELY BY COMBINING TECHNOLOGY, DESIGN AND DATA</h2>
          </div>
            <div className="space-y-3 max-w-[620px] w-full">
              <div className="border-b-2 top-0 border-black">
                <span className="text-xs text-left uppercase">
                  EXPLORE MORE
                </span>
              </div>
              <div>
                <ul className="font-black text-2xl space-y-3 w-full">
                  <NavigationLink />
                </ul>
              </div>
            </div>
        </main>
      </div>
    </>
  );
}

export default App;
