import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'
function App() {

const [addItem,setAddItem] = useState([])

	const addNote = (note)=>{

		setAddItem( (prevData)=>{
			return [...prevData ,note]
		})

		console.log(note)
	}

	const onDelete = (id)=>{
		setAddItem(  (oldData) => oldData.filter( (currData ,index)=>{
			return index!=id
										  }) )
	}


  return (
    <div >
    
    		<Header/>
      <CreateNote  passNote = {addNote}/>
     
      {
      	addItem.map((item,index) => {
      		return (
      				  <Note key={index} id={index} title={item.title} content={item.content} deleteItem = {onDelete} />
      		)	
      		
      	})

      }

      <Footer/>	      
    </div>
  );
}

export default App;
