import React from 'react';
import Section from './components/Section';
import Card from './components/Card';
import * as flavours from './assets/product_info.js';
import * as sizes from './assets/product_sizes';


function App() {
  return (
    <div className="App">
      <Section className="card-section">
        <Card flavour={flavours.fuaGra} size={sizes.SMALL} />
      </Section>
    </div>
  );
}

export default App;
