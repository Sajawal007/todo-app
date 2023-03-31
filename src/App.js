import logo from './logo.svg';
import './App.css';
import Listcard from './ListCard/Listcard';
import sData from './Data/sData.js'
import { useEffect, useState } from 'react';


function App() {
  const [notes, setNotes] = useState(sData);
  const [noOfNotes,setNotesNo] = useState(notes.length);
  const [noOfUpdates,setUpdates] = useState(0)
  const [noteTxt,setNoteTxt] = useState("");

  const incrementPriority = (key) => {
    notes[key].priority += 1;
    setUpdates(noOfUpdates+1)
  }
  const decrementPriority = (key) => {
    notes[key].priority -= 1;
    setUpdates(noOfUpdates+1)
  }
  const deleteNote = (key) => {
    notes.splice(key,1);
    setNotesNo(notes.length)
  }
  const addNote = (text_) => {
    notes.push({
      key:notes.length,
      text: text_,
      priority: 0
    })
    setNoteTxt("")
    setNotesNo(notes.length)
  }
  const sortList = () =>{
    notes.sort((p1,p2)=>(p1.priority < p2.priority)? 1:(p1.priority > p2.priority)?-1:0);
    setUpdates(noOfUpdates+1)
  }
  useEffect(() => {
    // Update the document title using the browser API
    
  },[noOfNotes,noOfUpdates]);

  return (
    <>
    <div className="App">
      <h1>Priority Based <br/> TODO App</h1>
      <div className='container'>
      <input className='input-field' type="text" onChange={(e)=>setNoteTxt(e.target.value)} value={noteTxt}/>
      <button className='add-btn' onClick={()=>addNote(noteTxt)}>ADD</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {
          notes.map((val,ind) => {
            return <Listcard id={ind} text={val.text} priority={val.priority.toString()}
              deleteNote = {deleteNote} increment = {incrementPriority} decrement= {decrementPriority}
            />
          })
        }
      </div>
      </div>
      <button className='add-btn' onClick={sortList}>SORT</button>
    </div>
    </>
  );
}

export default App;
