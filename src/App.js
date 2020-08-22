import React from 'react';
import Section from './components/Section';
import Card from './components/Card';
import Title from './components/Title';
import * as flavours from './assets/product_info.js';
import * as sizes from './assets/product_sizes';
import './App.css';


function App() {
  return (
    <div className="App">
      <Title>Ты покормил сегодня кота?</Title>
      <Section className="card-section">
        <Card flavour={flavours.fuaGra} size={sizes.SMALL} />
        <Card flavour={flavours.fish} size={sizes.MEDIUM} />
        <Card flavour={flavours.chicken} size={sizes.LARGE} />
      </Section>
    </div>
  );
}

export default App;
