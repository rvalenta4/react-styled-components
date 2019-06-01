import React from 'react';
import './App.css';
import StyledButton from './components/Button'

const App = () => {
  return (
    <>
      <StyledButton
        primary
        click={() => console.log('I am a primary button and I was clicked')}
        hover={() => console.log('I am a primary button and I was hovered')}>
        Primary
      </StyledButton>
      <StyledButton
        click={() => console.log('I am a primary button and I was clicked')}
        hover={() => console.log('I am a primary button and I was hovered')}>
        Secondary
      </StyledButton>
    </>
  );
}

export default App;
