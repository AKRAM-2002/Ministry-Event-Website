import logo from '../assets/logo.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPalette, faAtom, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import TypedSubtitle from '../components/TypedSubtitle';

/**Assets */
import brainImage from '../assets/brain1.jpg';

import smallImage from '../assets/about.jpg';
import  FaqCard from '../utils/FaqCard';const Container = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 30px;


`;

const Logo = styled.img`
width: 150px;
`;

const Navbar = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
gap: 30px;

@media screen and (max-width: 768px) {
    display: none;
  }
`;


const NavbarItem = styled.a`
color: black;
font-size: 1.2rem;
text-decoration: none;
padding: 10px;
transition: opacity 0.3s ease;

&:hover {
  background-color: #007bff;
  border-radius: 34px;
}
`;

const Button = styled.button`
background-color: transparent;
color: black;
border: 1px solid #007bff;
padding: 10px 20px;
font-size: 1.2rem;
cursor: pointer;
border-radius: 30px;
transition: background-color 0.3s ease;

&:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
`;

const Title = styled.h1`
  margin-top: 2rem;
  color: white;
  font-size: 2.5rem;

  &::before{
    position: relative;
    left: 23rem;
    content: '';
    display: block;
    width: 115px;
    height: 3px;
    background-color: #007bff;
    margin: 0 auto;
  }
  &&::after{
    position: relative;
    right: 23.4rem;
    content: '';
    display: block;
    width: 115px;
    height: 3px;
    background-color: #007bff;
    margin: 5px auto;
  }

  

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    &::before {
        position: relative;
        left: 45%; /* Adjusted */
        content: '';
        display: block;
        width: 115px;
        height: 3px;
        background-color: #007bff;
        margin: 0 auto;
        transform: translateX(-50%); /* Center horizontally */
      }
    
      &::after {
        position: relative;
        left: -8%; /* Adjusted */
        content: '';
        display: block;
        width: 115px;
        height: 3px;
        background-color: #007bff;
        margin: 5px auto;
        transform: translateX(-50%); /* Center horizontally */
      }
  }
`;

const Subtitle = styled.h2`
color: #44546;
font-size: 1.5rem;
margin-bottom: 2rem;

@media screen and (max-width: 768px) {
  font-size: 1.2rem;
}
`;

const HeroSection = styled.section`
background-image: url(${brainImage});
background-size: cover;
background-position: center;
padding: 100px 0; /* Adjust as needed */
text-align: center;
color: #fff; /* Text color for better contrast */

@media screen and (max-width: 768px) {
  padding: 50px 0;
}
`;

const Section = styled.section`
margin: 2rem 0;
`;

const AwardsSection = styled.section`
  margin: 2rem 0;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 40px;
justify-content: center;
padding: 0 2rem;
`;

const KeyElement = styled.div`
background-color: #f9f9f9;
padding: 30px;
border-radius: 10px;
box-shadow: 4px 4px 48px rgba(0, 0, 0, 0.1);
`;

const KeyElementHeader = styled.h3`
font-weight: bold;
color: #333;
font-size: 1.6rem;
margin-bottom: 20px;
`;

const KeyElementIcon = styled.div`
color: #007bff;
font-size: 2rem;
margin-bottom: 10px;
`;

const Footer = styled.footer`
background-color: #333;
color: #fff;
padding: 20px 0;
text-align: center;
`;

const FooterText = styled.p`
margin: 0;
`;

const FooterLink = styled(NavLink)`
color: #fff;
text-decoration: none;
margin: 0 10px;
transition: opacity 0.3s ease;

&:hover {
  opacity: 0.8;
}
`;

const CallToActionSection = styled.section`
background-color: #007bff;
color: #fff;
padding: 80px 0;
text-align: center;
`;

const CallToActionTitle = styled.h2`
font-size: 2.5rem;
`;

const CallToActionButton = styled(Button)`
background-color: #fff;
color: #007bff;
border-color: #fff;

&:hover{
  color: white;
}
`;

const AboutSection = styled(Section)`
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 4rem;

@media screen and (max-width: 768px) {
  margin-left: 0;
  justify-content: center;
  margin-top: 24rem;
}
`;

const AboutParagraph = styled.p`
padding: 10px;
border: 2px solid #007bff;
border-radius: 10px;
box-shadow: 4px 4px 48px rgba(0, 0, 0, 0.1);
background-color: #f9f9f9;
`;

const SmallImageContainer = styled.div`
position: absolute;
right: 10px;
width: 350px;
height: 350px;
border-radius: 50%;
overflow: hidden;
margin: 10px;

@media screen and (max-width: 768px) {
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  right: 0px;
  width: 400px;
  height: 400px;
}
`;

const SmallImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const ImagesContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;


const FaqSection = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

const FaqTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;



const LandingPage = () => {

    console.log("Inside TypedSubtitle component");
    
    
  return (
    
    <Container>
       
      <Header>
        <Logo src={logo} alt="Logo" />
        <Navbar>
          <NavbarItem href="#categories">فئات المسابقة</NavbarItem>
          <NavbarItem href="#awards">الجوائز</NavbarItem>
          <NavbarItem href="#about">نبذة عن المسابقة</NavbarItem>
        </Navbar>
        <NavLink to="/login">
        <Button>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
          سجل الآن
        </Button>
        </NavLink>
      </Header>
      
      <HeroSection>
        <Title>مسابقة احتفال باليوم العالمي للملكية الفكرية 2024م</Title>
        <Subtitle>
          <TypedSubtitle  subtitle="الملكية الفكرية وأهداف التنمية المستدامة: بناء مستقبلنا المشترك بالابتكار والإبداع"
/>
        </Subtitle>
        <ImagesContainer>
          <SmallImageContainer>
            <SmallImage src={smallImage} alt="Small Image 1" />
          </SmallImageContainer>
          
        </ImagesContainer>
      </HeroSection>
      <AboutSection id="about">
      
        <AboutParagraph>
          <h2>نبذة عن المسابقة</h2>
          <p>
            تعتبر مسابقة الملكية الفكرية فرصة للمشاركين لعرض مواهبهم وأفكارهم الإبداعية في مختلف
            المجالات المتعلقة بالملكية الفكرية.
          </p>
        </AboutParagraph>
      </AboutSection>
      <Section id="categories">
        <h2>فئات المسابقة</h2>
        <Grid>
          <KeyElement>
            <KeyElementIcon>
              <FontAwesomeIcon icon={faPalette} />
            </KeyElementIcon>
            <KeyElementHeader>فئة الإبداع الفني</KeyElementHeader>
            <p>
              تشمل هذه الفئة المشاريع والأفكار الفنية والتصميمية التي تبرز الإبداع والتفرد في
              مجالات مثل الفنون البصرية، التصميم الجرافيكي، والتصوير الفوتوغرافي.
            </p>
          </KeyElement>
          <KeyElement>
            <KeyElementIcon>
              <FontAwesomeIcon icon={faAtom} />
            </KeyElementIcon>
            <KeyElementHeader>فئة الابتكار التقني</KeyElementHeader>
            <p>
              تشمل هذه الفئة المشاريع والأفكار التكنولوجية والهندسية التي تقدم حلولًا مبتكرة لتحديات
              معينة في المجتمع، مثل التكنولوجيا الخضراء، والذكاء الاصطناعي، والطاقة المتجددة.
            </p>
          </KeyElement>
          <KeyElement>
            <KeyElementIcon>
              <FontAwesomeIcon icon={faBriefcase} />
            </KeyElementIcon>
            <KeyElementHeader>فئة ريادة الأعمال</KeyElementHeader>
            <p>
              تشمل هذه الفئة المشاريع الريادية والأفكار التجارية الابتكارية التي تسعى لتحقيق النجاح
              التجاري بالاستفادة من الملكية الفكرية، مثل الشركات الناشئة، والابتكارات في مجال التسويق،
              والخدمات الرقمية.
            </p>
          </KeyElement>
        </Grid>
      </Section>
      <AwardsSection>
          <h2>الجوائز</h2>
          <p>سيتم منح جوائز قيمة للمشاريع الفائزة في كل فئة.</p>
          {/* Add images of past winners */}
        </AwardsSection>

        
        {/* FAQS */}
        
        <FaqSection>
      <FaqTitle>الأسئلة المتكررة</FaqTitle>
      <FaqCard
        question="ما هو اليوم العالمي للملكية الفكرية؟"
        response="اليوم العالمي للملكية الفكرية يتيح فرصةً فريدةً للانضمام إلى الغير في كل أنحاء العالم للتفكير في الطريقة التي تساعد بها الملكية الفكرية المشهد الفني العالمي على الازدهار والطريقة التي تدعم بها الابتكار التكنولوجي الذي يدفع عجلة التقدم البشري. وفي عام 2000، حدَّدت الدول الأعضاء في الويبو يوم 26 أبريل – وهو اليوم الذي دخلت فيه اتفاقية الويبو حيز النفاذ في عام 1970 – يوماً عالمياً للملكية الفكرية بهدف تعزيز الفهم العام للملكية الفكرية والوعي العام بها "
      />
      <FaqCard
        question="لماذا الاحتفال باليوم العالمي للملكية الفكرية؟"
        response="اليوم العالمي للملكية الفكرية يسلط الضوء على أهمية الحقوق مثل البراءات والعلامات التجارية وحقوق المؤلف في تعزيز الابتكار. نظام الملكية الفكرية يحمي المخترعين والمبدعين، ويشجع على الابتكار والإبداع بتوفير الحماية القانونية والاعتراف بالأصالة والابتكارية. يعتبر هذا النظام وسيلة فعالة لتعزيز التقدم البشري وتحسين الحياة."
      />
      <FaqCard
        question="ما هو موضوع اليوم العالمي للملكية الفكرية لعام 2024؟"
        response=" موضوع يوم الملكية الفكرية العالمية 2024 هو الملكية الفكرية وأهداف التنمية المستدامة: بناء مستقبلنا المشترك بالابتكار والإبداع.
        في عام 2024، سنحتفل بصانعي التغيير في جميع أنحاء العالم الذين يقودون الابتكار والإبداع اللازمين لتحقيق أهداف التنمية المستدامة وبناء مستقبل أفضل وأكثر استدامة للجميع."
      />
      
      {/* Add more FAQ cards as needed */}
    </FaqSection>

      

    {/*Call To Action */}

    <CallToActionSection>
        <CallToActionTitle>انضم إلينا الآن وشارك في المسابقة</CallToActionTitle>
        <NavLink to='/register'><CallToActionButton>تسجيل الآن</CallToActionButton></NavLink>
       
      </CallToActionSection>

            {/* Footer */}
            <Footer>
        <FooterText> حقوق النشر © 2024. جميع الحقوق محفوظة.
</FooterText>
        <FooterText>
          <FooterLink to="/privacy">سياسة الخصوصية</FooterLink>
          <span>|</span>
          <FooterLink to="/terms">شروط الخدمة</FooterLink>
          <span>|</span>
          <FooterLink to="/contact">اتصل بنا</FooterLink>
        </FooterText>
      </Footer>

    </Container>
   
  );
};

export default LandingPage;
