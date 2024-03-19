import logo from '../assets/logo.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPalette, faAtom, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import brainImage from '../assets/brain1.jpg'
const Container = styled.div`
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
  margin-left: 30px;
`;


const NavbarItem = styled.a`
color: black;
font-size: 1.2rem;
text-decoration: none;
padding: 0 10px;
transition: opacity 0.3s ease;

 

 
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
`;

const Subtitle = styled.h2`
  color: #666;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroSection = styled.section`
  background-image: url(${brainImage});
  background-size: cover;
  background-position: center;
  padding: 100px 0; /* Adjust as needed */
  text-align: center;
  color: #fff; /* Text color for better contrast */
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

const LandingPage = () => {
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
            الملكية الفكرية وأهداف التنمية المستدامة: بناء مستقبلنا المشترك بالابتكار والإبداع
        </Subtitle>
      </HeroSection>
      <Section id="about">
        <h2>نبذة عن المسابقة</h2>
        <p>
          تعتبر مسابقة الملكية الفكرية فرصة للمشاركين لعرض مواهبهم وأفكارهم الإبداعية في مختلف
          المجالات المتعلقة بالملكية الفكرية.
        </p>
      </Section>
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

            {/* Footer */}
            <Footer>
        <FooterText>Copyright &copy; 2024. All rights reserved.</FooterText>
        <FooterText>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <span>|</span>
          <FooterLink to="/terms">Terms of Service</FooterLink>
          <span>|</span>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </FooterText>
      </Footer>

    </Container>
  );
};

export default LandingPage;
