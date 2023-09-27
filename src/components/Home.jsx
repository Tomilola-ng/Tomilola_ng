import img2 from "../assets/Tomi.png";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="md:px-16 px-7  my-10 md:my-20 min-h-[70vh]" id="home">
      <div>
        
        {/* image & content */}
        <div className="grid grid-gap-4 md:grid-cols-3">
          {/* text */}
          <div className="text-white md:col-span-2">
            <h6 className="text-3xl mt-12">Hello, I'm</h6>
            <h1 className="font-semibold md:text-5xl mb-4 text-3xl">
              Tomilola Oluwafemi
            </h1>
            <p className="md:w-96">
              I am a Software Engineer specialised in Web Development, #ALX #HNGI 
            </p>
            <a href="." className="transition-all duration-500 bg-primary py-2 px-2 rounded text-white hover:bg-white hover:text-primary flex justify-center place-items-center mt-5 w-2/5">
              <PaperAirplaneIcon className="w-4 mr-2" />
              My WhatsApp
            </a>
          </div>
          {/* img */}
          <div className="order-first md:order-last relative">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
