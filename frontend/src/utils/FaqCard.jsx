import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './FaqCard.css'
const FaqCard = ({ question, response }) => {
  const [showResponse, setShowResponse] = useState(false);

  const toggleResponse = () => {
    setShowResponse(!showResponse);
  };

  return (
    <div className="faq-card">
      <div className="faq-header" onClick={toggleResponse}>
        <h3 className="faq-question">{question}</h3>
        <div className={showResponse ? 'faq-icon-containerDown' : 'faq-icon-container'}>
        {showResponse ? <FaChevronDown style={{color: '#FFFFFFFF'}}/> : <FaChevronRight style={{color: '#007bff'}}/>}
        </div>
      </div>
      {showResponse && <p className="faq-response">{response}</p>}
    </div>
  );
};

export default FaqCard;
