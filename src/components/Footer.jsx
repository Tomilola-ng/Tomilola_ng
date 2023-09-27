import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <h1 className="text-primary font-semibold text-2xl my-4 w-full text-center">
        Connect with me
      </h1>
      {/* social media */}
      <div className="flex mb-5 justify-center">
        <a
          href="https://www.linkedin.com/in/tomilola-oluwafemi/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://instagram.com/Tomilola_ng"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a className="ml-4" href="github.com/Tomilola-ng" target="_blank" rel="noreferrer">
          <img src={dribbble} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:tee.o2809@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div>
      <p className="w-full text-center py-3 text-gray-100 tracking-wide text-sm">
        @ Copyright {new Date().getFullYear()} | Tomilola_ng
      </p>
    </div>
  );
};

export default Footer;
