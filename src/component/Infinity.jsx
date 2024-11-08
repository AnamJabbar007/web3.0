
import infinity from "../assets/infinty.svg";
import Shapes from "../component/Shapes";

const Infinity = () => {
  return (
    <section className="h-[100vh] overflow-hidden flex items-center bg-black">
      <div className="p-8 lg:p-20 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        {/* Text Section */}
        <div className="lg:max-w-lg">
          <h3 className="text-white text-4xl lg:text-5xl font-semibold mb-6">
            What is Web3 studio?
          </h3>
          <p className="lg:text-lg text-base text-white/60">
            Things around crypto, NFTs, and web3 as a whole are unbelievably
            interesting. Unfortunately, the overall usability as well as the
            quality of the UI is often still not up to the task. To achieve mass
            adoption, overcoming those hurdles will be key. And this is where
            our story begins.
          </p>
        </div>

        {/* Logo Section */}
        <div className="relative flex justify-center items-center lg:justify-end">
          {/* Text Inside the Infinity Logo */}
          <div className="absolute flex justify-between items-center lg:w-full w-full sm:w-1/2 md:w-1/2 sm:px-4 px-8 lg:px-12 text-white/60 lg:gap-12">
            <p className="text-left lg:mr-7  w-28 md:w-40 lg:w-56 lg:text-2xl md:text-base sm:text-base text-sm">
              Passion in the new wave of crypto
            </p>
            <p className="text-right  w-28 md:w-40 lg:w-56 lg:text-2xl md:text-base sm:text-base text-sm">
              High-quality <br /> design craft
            </p>
          </div>
          <div className="custom-rotate absolute -right-80">
            <Shapes />
          </div>

          {/* Infinity Logo */}
          <img
            src={infinity}
            alt="Infinity"
            className="object-contain h-40 lg:h-72"
          />
        </div>
      </div>
    </section>
  );
};

export default Infinity;
