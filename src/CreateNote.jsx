import React,{useState} from 'react';

const CreateNote = (props) =>{

const [note,setNote] = useState({
	title:'',
	content:''
}) 

const inputEvent=(event)=>{

	const {name , value} =  event.target;
	
	setNote( (prevdata) =>{
		return { ...prevdata , [name]:value}
	})
}

const addEvent = (event)=>{
	 event.preventDefault()
	props.passNote(note);
	setNote( {
		title:'',
		content:''	
	})
	
}


	return(
			<>
				<form className="main-note">
						<input type="text" placeholder="Title"  autoComplete="off" value={note.title} onChange={inputEvent} name="title"/>
						<textarea placeholder = "Write a note..." value={note.content} onChange={inputEvent} name="content"/>
						<button onClick={addEvent}>
								<img src="/plus.png"/>
						</button>
				</form>

			</>
	)	
}

export default CreateNote;