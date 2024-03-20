import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Subtitle = styled.h2`
  color: #666;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const TypedSubtitle = ({ subtitle }) => {
  
    const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (index < subtitle.length) {
      timer = setTimeout(() => {
        setTypedText(subtitle.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed
    } else {
      timer = setTimeout(() => {
        setTypedText('');
        setIndex(0);
      }, 5000); // Pause duration before retyping the subtitle
    }

    return () => clearTimeout(timer);
  }, [index, subtitle]);

  return <Subtitle>{typedText}</Subtitle>;
};

export default TypedSubtitle;
