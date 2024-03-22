import icon from "../../../assets/icon-thank-you.svg";
import icon1 from "../../../assets/Artboard 2_3svgs.svg";

const ThankYou = () => {
  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px] flex flex-col justify-center items-center mt-10">
      <img className="h-[180px] w-[180px]" src={icon} alt="checkmark" />
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        شكراً لمشاركتك!
      </h1>
      <p className="text-neutral-coolGray mt-3 text-center">
        تم استلام مشاركتك بنجاح! فريق التحكيم سيقوم بتقييم عملك وتقديره قريبًا. نتمنى لك التوفيق والنجاح! إذا كان لديك أي استفسارات أو تحتاج إلى مساعدة، فلا تتردد في التواصل معنا عبر البريد الإلكتروني:
        <span className="text-primary-marineBlue"> support@example.com</span>
      </p>
      <img className="h-[280px] w-[980px] absolute bottom-0" src={icon1} alt="checkmark" />
    </div>
  );
};

export default ThankYou;
