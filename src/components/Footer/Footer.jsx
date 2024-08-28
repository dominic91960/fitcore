import fb from "../../assets/Footer/facebook.png";
import li from "../../assets/Footer/linked-in.png";
import tw from "../../assets/Footer/twitter.png";
import ig from "../../assets/Footer/instagram.png";
import cp from "../../assets/Footer/copyright.png";

const Footer = () => {
  const date = new Date();
  const titleFontSize =
    "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]";
  const linkFontSize =
    "text-[7px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[13px]";

  return (
    <footer className="bg-gradient-to-t from-[#101010] to-[#535353] px-[10vw] py-[2%] md:px-[5vw]">
      <section>
        <div className={`flex justify-between md:px-[8vw] ${linkFontSize}`}>
          {/* Menu One */}
          <ul>
            <h4
              className={`relative w-fit font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[0.2em] after:w-[4ch] after:bg-primary after:content-[''] ${titleFontSize}`}
            >
              Contact Info
            </h4>
            <li className="mt-[1.5em]">
              Fitcore <br />
              Smith. 132, My Street, Kingston, <br /> New York 12401.
              <hr className="mt-[0.6em] border-b border-b-[#ADA19A]" />
            </li>
            <li className="mt-[1.5em]">Phone: +1 123 56 56</li>
            <li className="mt-[0.6em]">E-mail: FitCore@gmail.com</li>
            <li className="mt-[0.6em]">Phone: +1 123 56 56</li>
          </ul>
          {/* Menu Two */}
          <nav>
            <h4
              className={`relative w-fit font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[0.2em] after:w-[4ch] after:bg-primary after:content-[''] ${titleFontSize}`}
            >
              Services
            </h4>
            <a href="#" className="mt-[1.2em] flex items-center gap-x-[1em]">
              <span className="text-[2em]">&#62;</span> Home
            </a>
            <a href="#" className="flex items-center gap-x-[1em]">
              <span className="text-[2em]">&#62;</span> Our Trainers
            </a>
            <a href="#" className="flex items-center gap-x-[1em]">
              <span className="text-[2em]">&#62;</span> Pricing & Plans
            </a>
            <a href="#" className="flex items-center gap-x-[1em]">
              <span className="text-[2em]">&#62;</span> Contact
            </a>
          </nav>
          {/* Menu Three*/}
          <ul>
            <h4
              className={`relative w-fit font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[0.2em] after:w-[4ch] after:bg-primary after:content-[''] ${titleFontSize}`}
            >
              Opening Hours
            </h4>
            <li className="mt-[1.5em]">Monday - Sunday</li>
            <li className="mt-[1.2em]">
              09:00 am - 09:00 pm
              <hr className="mt-[1.2em] border-b-[#ADA19A]" />
            </li>
          </ul>
        </div>
        <hr className="mt-[1.2em] border-b border-b-[#ADA19A]" />
        <div className="flex flex-col justify-between md:flex-row-reverse md:items-baseline md:px-[8vw]">
          <ul className="mt-[1.2em] flex justify-center gap-[1.5em]">
            <li>
              <a href="#">
                <img src={fb} alt="Facebook" className="w-4 sm:w-full" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={li} alt="Facebook" className="w-4 sm:w-full" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={tw} alt="Facebook" className="w-4 sm:w-full" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={ig} alt="Facebook" className="w-4 sm:w-full" />
              </a>
            </li>
          </ul>
          <p
            className={`bg mt-[1.2em] flex items-center justify-center gap-[0.5em] text-center leading-none ${linkFontSize}`}
          >
            <img src={cp} alt="copyright" className="w-[1.8em]" />
            <span>
              Copyright {date.getFullYear()} FitCore Gym. All Right Reserved -
              Design by Wolvista
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
