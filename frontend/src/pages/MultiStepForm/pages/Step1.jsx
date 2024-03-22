import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
    
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [idAttachment, setIdAttachment] = useState("");
  const [commercialName, setCommercialName] = useState("");
  const [commercialNumber, setCommercialNumber] = useState("");
  const [commercialAttachment, setCommercialAttachment] = useState("");
  const [nameAlert, setNameAlert] = useState(false);
  const [genderAlert, setGenderAlert] = useState(false);
  const [idAttachmentAlert, setIdAttachmentAlert] = useState(false);
  const [commercialNameAlert, setCommercialNameAlert] = useState(false);
  const [commercialNumberAlert, setCommercialNumberAlert] = useState(false);
  const [commercialAttachmentAlert, setCommercialAttachmentAlert] = useState(false);
  const [civilNumberAlert, setCivilNumberAlert] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    let isValid = true;
    if (category === "individual") {
      if (name ==="" || gender ==="" || idAttachment==="") {
        setNameAlert(true);
        setGenderAlert(true);
        setIdAttachmentAlert(true);
        isValid = false;
      }
    } else if (category === "team") {
      if (!name || !idAttachment || !civilNumberAlert) {
        setNameAlert(!name);
        setIdAttachmentAlert(!idAttachment);
        setCivilNumberAlert(!civilNumberAlert);
        isValid = false;
      }
    } else if (category === "commercial") {
      if (!commercialName || !commercialNumber || !commercialAttachment) {
        setCommercialNameAlert(!commercialName);
        setCommercialNumberAlert(!commercialNumber);
        setCommercialAttachmentAlert(!commercialAttachment);
        isValid = false;
      }
    } else {
      // No validation needed for other category
    }

    // If all fields are valid, navigate to the next step
    if (isValid) {
      navigate("/dashboard/step2");
    }
  };

  return (
    <div className="text-right sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        : الخطوة الأولى
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
               
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            رجاء اختيار فئة المشاركة
          </label>
          <div className="flex space-x-4">
      <label className="flex items-center border border-gray-300 rounded p-2 hover:bg-gray-50 transition duration-300">
        <input
          type="radio"
          value="individual"
          checked={category === "individual"}
          onChange={(e) => setCategory(e.target.value)}
          className="form-radio text-primary-marineBlue focus:ring-primary-marineBlue"
        />
        <span className="ml-2 text-lg font-medium">فرد</span>
      </label>
      <label className="flex items-center border border-gray-300 rounded p-2 hover:bg-gray-50 transition duration-300">
        <input
          type="radio"
          value="commercial"
          checked={category === "commercial"}
          onChange={(e) => setCategory(e.target.value)}
          className="form-radio text-primary-marineBlue focus:ring-primary-marineBlue"
        />
        <span className="ml-2 text-lg font-medium">شركة / مؤسسة تجارية</span>
      </label>
      <label className="flex items-center border border-gray-300 rounded p-2 hover:bg-gray-50 transition duration-300">
        <input
          type="radio"
          value="team"
          checked={category === "team"}
          onChange={(e) => setCategory(e.target.value)}
          className="form-radio text-primary-marineBlue focus:ring-primary-marineBlue"
        />
        <span className="ml-2 text-lg font-medium">فريق مشترك</span>
      </label>
      <label className="flex items-center border border-gray-300 rounded p-2 hover:bg-gray-50 transition duration-300">
        <input
          type="radio"
          value="other"
          checked={category === "other"}
          onChange={(e) => setCategory(e.target.value)}
          className="form-radio text-primary-marineBlue focus:ring-primary-marineBlue"
        />
        <span className="ml-2 text-lg font-medium">غير ذلك</span>
      </label>
    </div>

              {/* Render fields based on selected category */}
              {category === "individual" && (
                <>
                  <label className="flex flex-row-reverse justify-between text-primary-marineBlue font-[500] mb-2 space-x-1">
                      الاسم 
                      {nameAlert && <span className="text-red-500 ">حقل مطلوب</span>}</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className={`${
                      nameAlert
                        ? "focus:outline-primary-strawberryRed"
                        : "focus:outline-primary-marineBlue"
                    } mb-3 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                    type="text"
                    placeholder="على سبيل المثال: محمد أحمد"
                  />
                  
                  <label className="flex flex-row-reverse justify-between text-primary-marineBlue font-[500] mb-1">الجنس {genderAlert && <span className="text-red-500">حقل مطلوب</span>}</label>
                  <select
                    onChange={(e) => setGender(e.target.value)}
                    className={`${genderAlert ? "focus:outline-primary-strawberryRed" : "focus:outline-primary-marineBlue"} mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  >
                    <option value="">اختر الجنس</option>
                    <option value="ذكر">ذكر</option>
                    <option value="أنثى">أنثى</option>
                  </select>
                  <label className="flex flex-row-reverse justify-between text-primary-marineBlue font-[500] mb-1">إرفاق البطاقة {idAttachmentAlert && <span className="text-red-500">حقل مطلوب</span>}</label>
                    <input
                      onChange={(e) => setIdAttachment(e.target.value)}
                      className={`${idAttachmentAlert ? "focus:outline-primary-strawberryRed" : "focus:outline-primary-marineBlue"} mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                      type="file"
                    />
                </>
              )}
              {category === "team" && (
                <>
                  <label className="flex flex-row-reverse justify-between text-primary-marineBlue font-[500] mb-2">
                    الاسم
                    {nameAlert && <span className="text-red-500">حقل مطلوب</span>}</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className={`${
                      nameAlert
                        ? "focus:outline-primary-strawberryRed"
                        : "focus:outline-primary-marineBlue"
                    } mb-4 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                    type="text"
                    placeholder=" "
                  />
                  <label className="flex flex-row-reverse justify-between text-primary-marineBlue font-[500] mb-1">
                    الرقم المدني
                    {civilNumberAlert && <span className="text-red-500">حقل مطلوب</span>}
                    </label>
                  <input
                    onChange={(e) => setCivilNumberAlert(e.target.value)}
                    className={`${
                      civilNumberAlert
                        ? "focus:outline-primary-strawberryRed"
                        : "focus:outline-primary-marineBlue"
                    } mb-4 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                    type="text"
                    placeholder="ادخل الرقم المدني"
                  />
                  <label className="flex flex-row-reverse justify-between text-primary-marineBlue font-[500] mb-1">
                    إرفاق البطاقة
                    {idAttachmentAlert && <span className="text-red-500">حقل مطلوب</span>}</label>
                  <input
                    onChange={(e) => setIdAttachment(e.target.value)}
                    className={`${
                      idAttachmentAlert
                        ? "focus:outline-primary-strawberryRed"
                        : "focus:outline-primary-marineBlue"
                    } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                    type="file"
                  />
                </>
              )}

              
            {category === "commercial" && (
              <>
                <label className="flex flex-row-reverse justify-between text-primary-marineBlue font-[500] mb-2">
                  الاسم التجاري
                  {commercialNameAlert && <span className="text-red-500">حقل مطلوب</span>}
                  </label>
                <input
                  onChange={(e) => setCommercialName(e.target.value)}
                  className={`${
                    commercialNameAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-4 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  type="text"
                  placeholder="على سبيل المثال: شركة النور"
                />
                <label className="flex flex-row-reverse justify-between text-primary-marineBlue font-[500] mb-1">
                  رقم السجل التجاري
                  {commercialNumberAlert && <span className="text-red-500">حقل مطلوب</span>}
</label>
                <input
                  onChange={(e) => setCommercialNumber(e.target.value)}
                  className={`${
                    commercialNumberAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  type="text"
                  placeholder="ادخل رقم السجل التجاري"
                />
                <label className="flex flex-row-reverse justify-between text-primary-marineBlue font-[500] mb-1">
                  إرفاق السجل التجاري
                  {commercialAttachmentAlert && <span className="text-red-500">حقل مطلوب</span>}</label>
                <input
                  onChange={(e) => setCommercialAttachment(e.target.files[0])}
                  className={`${
                    commercialAttachmentAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-4 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  type="file"
                />
              </>
            )}

              {category === "other" && (
                <>
                  <p>هيئة حكومية / جمعيات / مؤسسة أكاديمية / مدرسة..... و غيرها</p>
                </>
              )}
            </div>
            <div className="flex justify-end items-end py-[2px] mt-[120px] sm:mt-[26px]">
            <button
                className="next bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 -mt-6 transition-all duration-300 hover:opacity-75"
                type="submit"
              >
                تسليم
              </button>
            </div>
      </form>
    </div>
  );
  
}
export default Step1