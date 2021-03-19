import { useContext } from 'react';
import { ActiveBookContext } from '../../../App';
import { noteTypes, NoteObject } from '../../../lib/constants';
import style from './styles/AddNoteBar.module.css';
import scheme from '../../../styles/schemes.module.css';

function AddNoteBar({ chapterId }) {
  const { saveEdits } = useContext(ActiveBookContext);

  return (
    <div className={style.addNoteBar}>
      <p>Add New:</p>
      <div className={style.addNoteButtonBar}>
        {noteTypes.map((noteType) => (
          <button
            className={`${style.addNoteButton} ${scheme[noteType]} ${scheme.dark} ${scheme.button}`}
            key={noteType}
            onClick={() =>
              saveEdits('note', new NoteObject(noteType), chapterId)
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
