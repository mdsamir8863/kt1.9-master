const PopUpBg = (Component) => {
  return function new_component(props) {
    return (
      <>
        <section className="w-full h-screen  fixed top-0  z-[9999]">
          <div className="flex w-full items-center justify-center h-full relative">
            <div className="absolute z-[-1] w-full h-full bg-black opacity-70 "></div>

            <div className="flex w-2/3 h-fit">
              <Component {...props} />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default PopUpBg;
