
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();
  return (
    
    <div className="text-right sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
    <h1 className=" mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
    :الخطوة الثالثة
    </h1>

    <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/dashboard/step2")} 
              className="prev-btn text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
            >
              الرجوع الى الوراء
              
            </button>
  
            <button
              className="next bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
              type="submit"
            >
              الخطوة التالية
            </button>
          </div>
    
  </div>
  )
}
export default Step3