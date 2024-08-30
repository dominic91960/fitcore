const ImageSection = ({ alt, bgMobile, bgDesktop, title }) => {
  return (
    <section className="relative h-fit">
      <img src={bgMobile} alt={alt} className="w-full sm:hidden" />
      <img src={bgDesktop} alt={alt} className="hidden w-full sm:block" />
      {title && (
        <h2 className="absolute bottom-[10%] left-0 right-0 text-center text-[12px] font-medium sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px]">
          {title[0]}
          <span className="text-primary"> {title[1]}</span>
        </h2>
      )}
    </section>
  );
};

export default ImageSection;
