import React, { useContext, useEffect, useRef ,useState} from "react";
import Notecontext from "../context/notes/notecontext";
import Notesitem from "./Notesitem";
import Noteadd from "./Noteadd";
const Notes = () => {
  const context = useContext(Notecontext);
  const { notes, getNote,editNote} = context;
  useEffect(() => {
    getNote();
    // Add an empty dependency array to run the effect only once
  }, []);
  const ref = useRef(null);
  const refclose = useRef(null);
  const [note, setNote] = useState({id:"",etitle: "", edescription: "",etag:""});
  const onChange = (e) => {
    setNote({...note,[e.target.name]: e.target.value});
  }
  const handleclick = (e) => {
    refclose.current.click();
    editNote(note.id,note.etitle, note.edescription, note.etag);
  }
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    })
  };

  return (
    <div>
      <Noteadd />
      <>
        <>
          {/* Button trigger modal */}
          <button
            type="button"
            ref={ref}
            className="btn btn-primary d-none"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Edit Note
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="container my-3">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="etitle" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={note.etitle}
                          id="etitle"
                          name="etitle"
                          aria-describedby="emailHelp"
                          onChange={onChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="edescription" className="form-label">
                          Description
                        </label>
                        <input
                          type="text"
                          value={note.edescription}
                          name="edescription"
                          className="form-control"
                          id="edescription"
                          onChange={onChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="etag" className="form-label">
                          Tag
                        </label>
                        <input
                          type="text"
                          name="eetag"
                          className="form-control"
                          id="tag"
                          value={note.etag}
                          onChange={onChange}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    ref={refclose}
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleclick}>
                    Update Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </>

      <div className="row mx-2">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return (
            <Notesitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
