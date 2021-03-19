import { useState, useContext } from 'react';
import { ActiveBookContext } from '../../../App';

import ChapterBar from './ChapterBar';
import AddNoteBar from './AddNoteBar';
import SVGButton from '../../Buttons/elements/SVGButton';

// import Note from '../../Note/Note';
import style from './styles/Chapter.module.css';

function Chapter({ chapter }) {
  const [isEditable, setEditable] = useState(false);
  const [isVisible, toggleVisibility] = useState(true);
  const [chapterNumber, setChapterNumber] = useState(chapter.chapterNumber);
  const { saveEdits } = useContext(ActiveBookContext);

  const handleButtonAction = (action, summary, chapterNumber) => {
    switch (action) {
      case 'delete':
        console.log('delete');
        break;
      case 'edit':
        toggleVisibility(true);
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
      <div className={style.header}>
        <SVGButton svgType='ChevronDown' activate={() => toggleVisibility(!isVisible)} />
        {isEditable ? (
          <>
            <h3>Chapter</h3>
            <input
              value={chapterNumber}
              className={`${style.textArea} ${style.chapterNumberInput} ${
                isEditable && style.editable
              }`}
              onChange={(event) => setChapterNumber(event.target.value)}
            ></input>
            <h3>:</h3>
          </>
        ) : (
          <h3>{`Chapter ${chapter.chapterNumber}:`}</h3>
        )}
      </div>
      <di className={style.information}>
        <ChapterBar
          chapter={chapter}
          isEditable={isEditable}
          toggleVisibility={() => toggleVisibility(!isVisible)}
          handleButtonAction={handleButtonAction}
        />
        {isVisible && <AddNoteBar chapterId={chapter.id} />}
      </di>
    </section>
  );
}

export default Chapter;

{
  /* <section>
            {chapter.notes?.map((note) => (
              <Note key={note.id} note={note} />
            ))}
          </section> */
}
