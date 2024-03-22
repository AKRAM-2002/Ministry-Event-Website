import { useState} from "react";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const handleSumbit = (event) => {
      event.preventDefault();
      
    };
    const handleCategorySelection = (category) => {
      setSelectedCategory(category);
    };
  
    const renderCategoryInfo = () => {
      switch (selectedCategory) {
        case 'اختراع':                           
          return (
            <div className="text-primary-marineBlue font-[500] text-right rtl mb-1">
              <h3>مسابقة براءات الاختراع</h3>
              
            
              <p>:معايير االشتراك في مسابقة فئة براءات الا ختراع
              </p>
              <ul className="list-outside right-full list-none">
                <li>أن يكون العمل نابعا ً من البيئة العمانية قدر االمكان ❑</li>
                <li>أن يكون عمال ً وطنيا ً مسجال ً لدى وزارة التجارة و الصناعة و ترويج االا ستثمار ❑</li>
                <li>أن يكون االختراع جديد ❑</li>
                <li>أن يتميز اإلختراع بالخطوة االبداعية ❑</li>
                <li>قابلية االختراع للتصنيع ❑</li>
                <li>وضوح المشكلة ومعالجتها تقنيا ❑</li>
                <li>التوافق مع شعار المسابقة (تحقيق االختراع للتنمية المستدامة) ❑</li>
              </ul>
            </div>
          );
        case 'مسابقة تصميم شعار':
          return (
            <div className="text-primary-marineBlue font-[500] mb-8">
              <p className="mb-2">مسابقة تصميم شعار سيستخدم كمؤشر جغرافي للبان العماني</p>
              <p>المؤشر الجغرافي:</p>
              <p>المؤشر الذي يحدد منشأ سلعة ما في إقليم بلد ما، أو في منطقة أو موقع في ذلك اإلقليم، حين تكون النوعية أو السمعة أو السمات األخرى لهذه السلعة راجعة بصورة أساسية إلى منشأها الجغرافي.</p>
              <p>معايير االشتراك في مسابقة فئة تصميم شعار سيستخدم كمؤشر جغرافي للبان العماني</p>
              <ul className="list-none list-outside">
                <li>أن يكون الشعار المصمم مرتبطا ً باللبان العماني ❑</li>
                <li>أن يكون الشعار المصمم نابعا ً من البيئة العمانية قدر االمكان ❑</li>
                <li>أن يكون الشعار المصمم جديدا ً و مبتكر ❑</li>
                <li>أن يتميز الشعار المصمم بالخطوة االبداعية ❑</li>
                <li>التوافق مع شعار المسابقة (تحقيق االختراع للتنمية المستدامة) ❑</li>
              </ul>
            </div>
          );
        case 'مسابقة التطبيقات الإلكترونية':
          return (
            <div className="text-primary-marineBlue font-[500] mb-8">
              <p>معايير االشتراك في مسابقة التطبيقات الإلكترونية </p>
              <ul className="list-none list-outside">
                <li>أن يكون العمل نابعا ً من البيئة العمانية قدر االمكان  ❑</li>
                <li>أن يكون التطبيق االلكتروني جديد ❑</li>
                <li> أن يتميز التطبيق إلكتروني بالخطوة االبداعية ❑</li>
                <li>التوافق التطبيق االلكترونيمع شعار المسابقة ❑</li>
              </ul>
              
            </div>
          );
        default:
          return null;
      }
    };
  
    return (
      <div className="text-right sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
        <h1 className=" mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        :الخطوة الثانية
        </h1>
        
        <form onSubmit={handleSumbit} className="flex flex-col relative">
          
          {/* Category Selection */}
          <div className="mb-2">
            <label className="block mb-2 text-primary-marineBlue font-[500]">:يرجى تحديد فئة المشاركة الخاصة بك</label>
            <select
              className="rounded-md p-2 outline-none border-primary-marineBlue border-[1px] focus:border-primary-lightBlue"
              onChange={(e) => handleCategorySelection(e.target.value)}
            >
              
              <option value="اختراع" selected>اختراع</option>
              <option value="مسابقة تصميم شعار">مسابقة تصميم شعار</option>
              <option value="مسابقة التطبيقات الإلكترونية">مسابقة التطبيقات الإلكترونية</option>
            </select>
          </div>
  
      
          {renderCategoryInfo()}
          
         
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/dashboard/step1")}
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
        </form>
      </div>
    );
}
export default Step2