import { useState, useContext } from 'react';
import { ActiveBookContext } from '../App';

import { NoteObject } from '../lib/constants';
import EditBar from './EditIcons/EditBar';
// import Note from '../components/Note';
import style from '../css/Chapter.module.css';
import { noteTypes } from '../lib/constants';

function Chapter({ chapter, saveChapter }) {
  const [summary, setSummary] = useState(chapter.summary);
  const [chapterNumber, setChapterNumber] = useState(chapter.chapterNumber);
  const [isEditable, setEditable] = useState(false);
  const { saveEdits } = useContext(ActiveBookContext);

  const handleButtonAction = (action) => {
    switch (action) {
      case 'delete':
        console.log('delete');
        break;
      case 'edit':
        setEditable(!isEditable);
        break;
      case 'save':
        setEditable(!isEditable);
        saveEdits('chapter', { summary, chapterNumber }, chapter.id);
        break;
      default:
    }
  };

  return (
    <section className={style.chapter}>
      <h3>Chapter {chapterNumber}:</h3>
      {isEditable && (
        <div>
          <button onClick={() => setChapterNumber(chapterNumber + 1)}>+</button>
          <button onClick={() => setChapterNumber(chapterNumber - 1)}>-</button>
        </div>
      )}
      <div className={style.notes}>
        <div className={style.chapterBar}>
          <textarea
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            disabled={!isEditable}
            placeholder={'Write a summary...'}
          ></textarea>
          <EditBar action={handleButtonAction} isVertical={false} />
        </div>
        <nav className={style.addNoteBar}>
          <p>Add New:</p>
          {noteTypes.map((noteType, index) => (
            <button
              className={style.button}
              key={index}
              onClick={() =>
                saveEdits('note', new NoteObject(noteType), chapter.id)
              }
            >
              {`Add ${noteType}`}
            </button>
          ))}
        </nav>
        <section>
          {chapter.notes?.map((note, index) => (
            <div key={index}></div>
            // <Note key={note.id} note={note} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default Chapter;
