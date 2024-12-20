import React, { useContext } from "react";
import Notecontext from "../context/notes/notecontext";

const Notesitem = (props) => {
  const context = useContext(Notecontext);
  const { deleteNote} = context;
  const { note ,updateNote} = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description}
          </p>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{ return deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{ updateNote(note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Notesitem;
