import React, { useContext , useState} from "react";
import Notecontext from "../context/notes/notecontext";

const Noteadd = () => {
  const context = useContext(Notecontext);
  const {addNote } = context;
  const [note, setNote] = useState({title: "", description: "",tag:"default"});
  const onChange = (e) => {
    setNote({...note,[e.target.name]: e.target.value});
  }
  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  }

  return (
    <div>
      <h1>Add a Note</h1>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input type="text" name="description" className="form-control" id="description" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input type="text" name="tag" className="form-control" id="tag" onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleclick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Noteadd;
