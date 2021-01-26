import { useState, useContext } from 'react';
import { ActiveBookContext } from '../App';

import { NoteObject } from '../lib/constants';
import ChevronDown from './EditIcons/svg/ChevronDown';
import EditBar from './EditIcons/EditBar';
import Note from '../components/Note';
import style from '../css/Chapter.module.css';
import scheme from '../css/schemes.module.css';
import { noteTypes } from '../lib/constants';

function Chapter({ chapter }) {
  const [summary, setSummary] = useState(chapter.summary);
  const [chapterNumber, setChapterNumber] = useState(chapter.chapterNumber);
  const [isEditable, setEditable] = useState(false);
  const [isVisible, toggleVisibility] = useState(true);
  const { saveEdits } = useContext(ActiveBookContext);

  const handleButtonAction = (action) => {
    switch (action) {
      case 'delete':
        console.log('delete');
        break;
      case 'edit':
        toggleVisibility(true)
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
      <button
        className={style.downArrow}
        onClick={() => toggleVisibility(!isVisible)}
      >
        <ChevronDown />
      </button>
      <h3>Chapter {chapterNumber}:</h3>
      {/* {isEditable && (
        <div>
          <button onClick={() => setChapterNumber(chapterNumber + 1)}>+</button>
          <button onClick={() => setChapterNumber(chapterNumber - 1)}>-</button>
        </div>
      )} */}
      <div className={style.notes}>
        <div className={style.chapterBar}>
          <textarea
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            disabled={!isEditable}
            placeholder={'Write a summary...'}
          ></textarea>
          <EditBar action={handleButtonAction} isVertical={true} />
        </div>
        {isVisible && (
          <>
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
            <section>
              {chapter.notes?.map((note) => (
                <Note key={note.id} note={note} />
              ))}
            </section>
          </>
        )}
      </div>
    </section>
  );
}

export default Chapter;
