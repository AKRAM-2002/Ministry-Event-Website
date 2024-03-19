import logo from '../assets/logo.png'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPalette, faAtom, faBriefcase } from '@fortawesome/free-solid-svg-icons';


// Styled components
const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  padding: 20px;
  position: relative;
`;

const Logo = styled.img`
  width: 150px;
  position: absolute;
  top: 20px;
  left: 20px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const UnderLogo = styled.img`
  width: 150px;
  
  margin-top: 8rem;
  align-ietms: center;
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Title = styled.h1`
  margin-top: 6rem;
  color: #333;
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  color: #666;
  font-size: 1.8rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  margin: 40px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  justify-content: center;
`;

const KeyElement = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const KeyElementHeader = styled.h3`
  font-weight: bold;
  color: #333;
  font-size: 1.6rem;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const KeyElementIcon = styled.div`
  color: #007bff;
  font-size: 2rem;
  margin-bottom: 10px;
`;


// Landing page component
const LandingPage = () => {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      
      <Title>مسابقة احتفال باليوم العالمي للملكية الفكرية 2024م</Title>
      <Subtitle>
        الملكية الفكرية وأهداف التنمية المستدامة: بناء مستقبلنا المشترك باالبتكار واإلبداع
      </Subtitle>
      <Section>
        <h2>نبذة عن المسابقة</h2>
        <p>
          تعتبر مسابقة احتفال باليوم العالمي للملكية الفكرية فرصة للمشاركين لعرض مواهبهم
          وأفكارهم الإبداعية في مختلف المجالات المتعلقة بالملكية الفكرية.
        </p>
      </Section>
      <Section>
        <h2>فئات المسابقة</h2>
        <Grid>
          <KeyElement>
          <KeyElementIcon>
              <FontAwesomeIcon icon={faPalette} />
            </KeyElementIcon>
            <KeyElementHeader>فئة الإبداع الفني</KeyElementHeader>
            <p>
              تشمل هذه الفئة المشاريع والأفكار الفنية والتصميمية التي تبرز الإبداع والتفرد
              في مجالات مثل الفنون البصرية، التصميم الجرافيكي، والتصوير الفوتوغرافي.
            </p>
          </KeyElement>
          <KeyElement>
          <KeyElementIcon>
              <FontAwesomeIcon icon={faAtom} />
            </KeyElementIcon>
            <KeyElementHeader>فئة الابتكار التقني</KeyElementHeader>
            <p>
              تشمل هذه الفئة المشاريع والأفكار التكنولوجية والهندسية التي تقدم حلولًا مبتكرة
              لتحديات معينة في المجتمع، مثل التكنولوجيا الخضراء، والذكاء الاصطناعي، والطاقة
              المتجددة.
            </p>
          </KeyElement>
          <KeyElement>
          <KeyElementIcon>
              <FontAwesomeIcon icon={faBriefcase} />
            </KeyElementIcon>
            <KeyElementHeader>فئة ريادة الأعمال</KeyElementHeader>
            <p>
              تشمل هذه الفئة المشاريع الريادية والأفكار التجارية الابتكارية التي تسعى لتحقيق
              النجاح التجاري بالاستفادة من الملكية الفكرية، مثل الشركات الناشئة، والابتكارات في
              مجال التسويق، والخدمات الرقمية.
            </p>
          </KeyElement>
        </Grid>
      </Section>
      <Section>
        <h2>الجوائز</h2>
        <p>سيتم منح جوائز قيمة للمشاريع الفائزة في كل فئة.</p>
      </Section>

      <ButtonContainer>
      <Button>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
          تسجيل الدخول كمتسابق
        </Button>
        <Button>
          <FontAwesomeIcon icon={faUsers} style={{ marginRight: '10px' }} />
          تسجيل الدخول كحكم
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LandingPage;
