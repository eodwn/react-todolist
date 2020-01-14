import React, {Fragment} from 'react';

function App() {
  const name = "리액트";
  const style = {
    backgroundColor : 'gray',
    clolr : 'black',
    fontSize : '17px'
  }

  return (
    <div style={style}>
      {name === '리액트' && <h1>리액트입니다.</h1>}

      <div style={{
        color : 'red',
        fontSize : '24px'
      }}>{name}</div>

    </div>
  );
}

export default App;
