import React, {useState} from 'react'


function App() {
  const [text, setText] = useState()
  function get(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(json =>  setText(json.slip.advice))
  }
  
  return (
  <div className='container'>
  <div className='field'>{text}</div>
  <button className='btn' onClick={get}>get an advice</button>
    </div>
  );
}

export default App;
