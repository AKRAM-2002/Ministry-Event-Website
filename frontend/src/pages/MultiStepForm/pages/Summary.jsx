import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px] text-center">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
      تأكيد
      </h1>
      <p className="text-neutral-coolGray mb-6 hidden sm:block">
      المرجو التحقق من المعلومات قبل التأكيد
      </p>
      

      <div className="flex justify-around sm:justify-between items-center pt-[260px] sm:pt-[79px]">
        <button
          onClick={() => navigate("/dashboard/step3")}
          className="prev-btn text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
        >
              الرجوع الى الوراء
        </button>

        <button
          className="upload bg-primary-purplishBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
          onClick={() => navigate("/thankyou")}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
