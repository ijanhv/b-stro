export const BookTable = () => {
  return (
    <div className="h-full my-16 lg:my-4 lg:h-screen flex items-center justify-center">
      <div className="box ">
        <div className="p-10 lg:p-16 flex flex-col gap-7 items-center justify-center border border-diplomatic">
          <div className="flex flex-col items-center justify-center gap-3">

 
          <div className="text-xl font-bold font-cormorant text-white">
            Reservations
          </div>
          <hr className="w-28 border-diplomatic" />
          </div>

          <h3 className="text-4xl lg:text-6xl font-bold text-diplomatic font-cormorant">
            Book a Table
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full px-5">
            <div className="select">
                1 Person
                </div>
            <div className="select">
                12/05/2024
                </div>
            <div className="select">
               11:00 AM
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
