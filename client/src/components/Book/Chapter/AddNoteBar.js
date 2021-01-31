import { noteTypes } from '../../../lib/constants';
import scheme from '../../../styles/schemes.module.css';

function AddNoteBar() {
  return (
    <div className={style.addNoteBar}>
      <p>Add New:</p>
      <div className={style.addNoteButtonBar}>
        {noteTypes.map((noteType) => (
          <button
            className={`${scheme[noteType]} ${scheme.dark} ${scheme.button}`}
            key={noteType}
            onClick={() =>
              saveEdits('note', new NoteObject(noteType), chapter.id)
            }
          >
            {`${noteType.charAt(0).toUpperCase() + noteType.slice(1)}`}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AddNoteBar;
