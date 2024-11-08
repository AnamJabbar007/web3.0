

export const FooterCircle = () => {
  return (
    <div className="relative top-[-155px] flex justify-center items-center">
      <div className="absolute blur-[50px] -z-30 right-[16%] sm:right-[13%] md:right-[20%] xl:right-[25%] bg-lightBlue rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[350px] md:h-[350px]"></div>
      <div className="absolute blur-[50px] -z-10 right-[0%] sm:right-[0%] md:right-[5%] xl:right-[12%] top-[5px] sm:top-[0px] md:top-[-50px] bg-darkBlue rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[550px] md:h-[550px]"></div>
      <div className="absolute blur-[50px] -z-20 right-[25%] sm:right-[25%] md:left-[18%] xl:left-[30%] top-[5px] sm:top-[0px] md:top-[-50px] bg-green rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[550px] md:h-[550px]"></div>
    </div>
  );
};

export default FooterCircle;
