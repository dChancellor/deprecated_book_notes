import Chapter from '../components/Chapter';
import style from '../css/BookNotes.module.css';

function Book({ annotation, saveAnnotation }) {
  const addChapter = () => {
    let tempData = [...annotation];
    let chapterCounter = annotation.length + 1;
    let newChapter = {
      chapterNumber: chapterCounter,
      notes: [],
      summary: '',
    };
    tempData.push(newChapter);
    saveAnnotation(tempData);
  };

  const saveChapter = (chapterNumber, data) => {
    let tempData = [...annotation];
    tempData[chapterNumber - 1] = { ...tempData[chapterNumber - 1], ...data };
    saveAnnotation(tempData);
  };

  return (
    <>
      <button className={style.button} onClick={addChapter}>
        Add Chapter
      </button>
      <section>
        {annotation &&
          annotation.map((chapter) => (
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
