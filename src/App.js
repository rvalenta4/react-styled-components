import React from 'react';
import './App.css';
import Button from './components/Button'

const App = () => {
  return (
    <>
      <Button
        primary
        click={() => console.log('I am a primary button and I was clicked')}
        hover={() => console.log('I am a primary button and I was hovered')}>
        Primary
      </Button>
      <Button
        click={() => console.log('I am a secondary button and I was clicked')}
        hover={() => console.log('I am a secondary button and I was hovered')}>
        Secondary
      </Button>
    </>
  );
}

export default App;
