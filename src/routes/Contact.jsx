import ImageSection from "../components/ImageSection/ImageSection";
import Input from "../components/Input/Input";

import bgMobile from "../assets/Contact/bg-mobile.png";
import bgDesktop from "../assets/Contact/bg-desktop.png";
import location from "../assets/Contact/location.png";
import phone from "../assets/Contact/phone.png";
import email from "../assets/Contact/email.png";
import clock from "../assets/Contact/clock.png";

const data = [
  {
    img: location,
    h3: "Location",
    p: ["132, My Street, Kingston,", "New York 12401."],
  },
  {
    img: phone,
    h3: "Phone",
    p: ["+1 123 56 56"],
  },
  {
    img: email,
    h3: "Email",
    p: ["FitCore@gmail.com"],
  },
  {
    img: clock,
    h3: "Working Hours",
    p: ["Monday - Sunday ", " 09:00 am - 09:00 pm"],
  },
];

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ImageSection alt="A trainer" bgMobile={bgMobile} bgDesktop={bgDesktop} />
      <section className="px-[10vw] text-center md:px-[5vw]">
        <h2 className="mt-[1.2em] text-[12px] font-medium sm:text-[18px] md:text-[22px] lg:text-[30px] xl:text-[36px] 2xl:text-[42px]">
          Connect with us for fitness support
        </h2>
        <article className="mx-auto mb-[6%] mt-[4.5%] flex max-w-screen-xl justify-between md:w-[85%] xl:w-[80%]">
          {data.map(({ img, h3, p }, i) => (
            <figure key={i} className="flex flex-col items-center">
              <img
                src={img}
                alt="Location"
                className="w-6 sm:w-8 lg:w-9 xl:w-12 2xl:w-16"
              />
              <figcaption>
                <h3 className="mb-[0.3em] mt-[0.8em] text-[9px] font-semibold sm:text-[15px] md:text-[16px] lg:text-[19px] xl:text-[21px] 2xl:text-[24px]">
                  {h3}
                </h3>
                <p className="text-[7px] sm:text-[9px] md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[20px]">
                  {p[0]}{" "}
                  {p[1] && (
                    <>
                      <br />
                      {p[1]}
                    </>
                  )}
                </p>
              </figcaption>
            </figure>
          ))}
        </article>
      </section>
      <section className="h-[200px] sm:h-[450px]">
        <iframe
          title="location"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(FitCore)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </section>
      <section className="bg-[url('./assets/Contact/form-bg.png')] bg-cover bg-center px-[10vw] md:px-[5vw]">
        <form
          onSubmit={handleFormSubmit}
          className="flex w-fit flex-col py-[8%] text-center sm:pb-[12%] sm:pt-[6%] sm:text-left"
        >
          <h2 className="mb-[1em] font-semibold leading-tight sm:mb-[0.8em] sm:text-[28px] md:text-[33px] lg:text-[36px] xl:text-[46px] 2xl:text-[55px]">
            Have questions? <br /> Get in touch!
          </h2>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="number" name="number" placeholder="Number" />
          <Input type="email" name="email" placeholder="Email" />
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Message"
            className="mb-[0.7em] w-[28ch] px-[0.8em] py-[0.4em] text-[12px] text-black placeholder:capitalize sm:w-full sm:px-[1em] sm:py-[0.6em] lg:text-[13px] 2xl:text-[14px]"
          ></textarea>
          <button className="mx-auto mt-[0.8em] w-fit bg-primary px-[1.2em] py-[0.2em] text-[13px] font-extrabold uppercase text-black sm:w-3/5 lg:text-[14px] 2xl:text-[15px]">
            Send
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
