const Title = ({head,title,subtitle}) => {
  return (
    <div className="text-center mb-14">
      <p className="tracking-widest text-xs sm:text-sm text-[#7a6a5a] dark:text-[#b8a28d]">
        {head}
      </p>

      <h2 className="mt-3 font-bold text-[26px] sm:text-[36px] md:text-[44px] text-[#5f5146] dark:text-[#f2e7da]">
        {title}
      </h2>

      <p className="mt-4 text-sm sm:text-base max-w-xl mx-auto text-[#7a6a5a] dark:text-[#c4b19d]">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
