import React, { useState } from "react";
import Notecontext from "./notecontext";
const NoteState = (props) => {
  const host="http://localhost:5000"
    const notesinit=[]
      const [notes, setNotes] = useState(notesinit)
      // get all notes

      const getNote= async () => {
        const response= await fetch(`${host}/api/notes/fetchallnotes`, {
          method:"GET",
          headers:{
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2ZmM2MWMyYmRiMjQwNzNkMDk3YzZjIn0sImlhdCI6MTcxODYwMTMxMX0.ntE7aoNpP14Ab4Fo6DVtKjZRAhQXJqkVEAUD4jAD27w"
          }
        })
        const json=await response.json()
        setNotes(json)
      }
    //   Add note

      const addNote= async (title, description,tag) => {
        const response= await fetch(`${host}/api/notes/addnote`, {
          method:"post",
          headers:{
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2ZmM2MWMyYmRiMjQwNzNkMDk3YzZjIn0sImlhdCI6MTcxODYwMTMxMX0.ntE7aoNpP14Ab4Fo6DVtKjZRAhQXJqkVEAUD4jAD27w"
          },
          body: JSON.stringify({title,description,tag})
        })
        const note= await response.json()
        setNotes(notes.concat(note));
      }
    //   Delete note
      const deleteNote=async(id)=>{
        const response= await fetch(`${host}/api/notes/deletenote/${id}`, {
          method:"DELETE",
          headers:{
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2ZmM2MWMyYmRiMjQwNzNkMDk3YzZjIn0sImlhdCI6MTcxODYwMTMxMX0.ntE7aoNpP14Ab4Fo6DVtKjZRAhQXJqkVEAUD4jAD27w"
          },
        })
        const json=await response.json()
        console.log(json)
        const newnote= notes.filter((note)=>note._id!==id)
        setNotes(newnote)
    }
    //   Update note
      const editNote= async (id,title,description,tag) => {
        const response= await fetch(`${host}/api/notes/updatenote/${id}`, {
          method:"PUT",
          headers:{
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2ZmM2MWMyYmRiMjQwNzNkMDk3YzZjIn0sImlhdCI6MTcxODYwMTMxMX0.ntE7aoNpP14Ab4Fo6DVtKjZRAhQXJqkVEAUD4jAD27w"
          },
          body: JSON.stringify({title,description,tag})
        })
        // const json= response.json()
        let newNotes=JSON.parse(JSON.stringify(notes))
        for(let i=0;i<newNotes.length;i++){
          const element=newNotes[i]
          if(element._id!==id){
            newNotes[i].title=title
            newNotes[i].description=description
            newNotes[i].tag=tag
            break;
          }
        }
        setNotes(newNotes)
    }
  return (
    <Notecontext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>
        {props.children}
    </Notecontext.Provider>
  );
};
export default NoteState;
