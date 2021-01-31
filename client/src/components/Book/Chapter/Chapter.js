import { useState, useContext } from 'react';
import { ActiveBookContext } from '../../../App';

import ChapterBar from './ChapterBar';
// import AddNoteBar from './AddNoteBar'
// import Note from '../../Note/Note';
import style from './styles/Chapter.module.css';

function Chapter({ chapter }) {
  const [isEditable, setEditable] = useState(false);
  const [isVisible, toggleVisibility] = useState(true);
  const { saveEdits } = useContext(ActiveBookContext);

  const handleButtonAction = (action) => {
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
        // saveEdits('chapter', { summary, chapterNumber }, chapter.id);
        break;
      default:
    }
  };

  return (
    <section className={style.chapter}>
      <ChapterBar
        chapter={chapter}
        isEditable={isEditable}
        toggleVisibility={() => toggleVisibility(!isVisible)}
        handleButtonAction={handleButtonAction}
      />
      {isVisible && (
        <h1>Is Visible</h1>
        // <h1>
        //   <AddNoteBar />
        //   <section>
        //     {chapter.notes?.map((note) => (
        //       <Note key={note.id} note={note} />
        //     ))}
        //   </section>
        // </h1>
      )}
    </section>
  );
}

export default Chapter;
