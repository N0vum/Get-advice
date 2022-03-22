import React, {useState, useEffect} from 'react'


function App() {
  const [text, setText] = useState()



  return (
  <div className='container'>
  <div className='field'>{JSON.stringify(text.slip.advice, null, 2)}</div>
  <button className='button' onClick={()=>{fetch('https://api.adviceslip.com/advice')
.then(response => response.json())
.then(json => setText(json))}}>get an advice</button>
    </div>
  );
}

export default App;
