import React, {Component} from 'react';
import './App.css';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyComponent name="React" favoriteNumber={1}>
      리액트
    </MyComponent>
  )
};

export default App;
