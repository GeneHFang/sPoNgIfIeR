import React, {useState} from 'react';
import './App.css';
import logo from './GitHub-Mark-Light-64px.png';

function App() {

  const [text, setText] = useState("");
  const [sp, setSp] = useState("");
  const [copy, setCopy] = useState(false);

  const changeAndSet = (e) => {
    if (copy) { setCopy(false); }
    setText(e.target.value);
    let text = e.target.value;
    let retText = "";
    let lower = true;

    for (let i = 0; i < text.length ; i++){
      if (text.charAt(i) === " " || !text.charAt(i).match(/[a-z|A-Z]/i)){
        retText += text.charAt(i);
      }
      else if (lower){
        retText += text.charAt(i).toLowerCase();
        lower = false;
      }
      else {
        retText += text.charAt(i).toUpperCase();
        lower = true;
      }
    }
    setSp(retText);
  }

  const copyTo = ()=>{
    navigator.clipboard.writeText(sp);
    setCopy(true);
  }



  return (
    <div>
      <div className="header">
        <img src={logo} />
      </div>
      <div className="App">
        <h1>sPoNgIfY yOuR tExT</h1>
        <input value={text} placeholder="enter any text here" onChange={changeAndSet}/><br/><br/><br/>
        {sp ? <button onClick={copyTo}>Copy to Clipboard</button>: null}
        {sp ? <h2>{sp}</h2>: null}
        {copy ? <p className="copy">Copied!</p> : null}
      </div>
    </div>
  );
}

export default App;
