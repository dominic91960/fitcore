const ImageSection = ({ alt, bgMobile, bgDesktop }) => {
  return (
    <section className="h-fit">
      <img src={bgMobile} alt={alt} className="w-full sm:hidden" />
      <img src={bgDesktop} alt={alt} className="hidden w-full sm:block" />
    </section>
  );
};

export default ImageSection;
