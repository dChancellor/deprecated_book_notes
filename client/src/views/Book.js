import Chapter from '../components/Chapter';
import style from '../css/BookNotes.module.css';

function Book({ chapters, saveAnnotation }) {
  const addChapter = () => {
    let chapterCounter = chapters.length + 1;
    saveAnnotation([
      ...chapters,
      {
        chapterNumber: chapterCounter,
        notes: [],
        summary: '',
      },
    ]);
  };

  const saveChapter = (chapterNumber, newNotes) => {
    chapters[chapterNumber-1].notes = newNotes
    saveAnnotation(chapters);
  };

  return (
    <>
      <button className={style.button} onClick={addChapter}>
        Add Chapter
      </button>
      <section>
        {chapters &&
          chapters.map((chapter) => (
            <Chapter
              saveChapter={saveChapter}
              chapter={chapter}
              key={chapter.chapterNumber}
            />
          ))}
      </section>
    </>
  );
}

export default Book;
