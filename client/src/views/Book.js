import { useContext } from 'react';
import { ActiveBookContext } from '../App';
import { ChapterObject } from '../lib/constants';
import Chapter from '../components/Chapter';
import style from '../css/Chapter.module.css';

function Book() {
  const { activeBook: book, saveEdits } = useContext(ActiveBookContext);

  return (
    <>
      <div className={style.chapters}>
        {book.chapters &&
          book.chapters.map((chapter) => (
            <Chapter chapter={chapter} key={chapter.id} />
          ))}
      </div>
      <button
        className={style.button}
        onClick={() =>
          saveEdits('chapter', new ChapterObject(book.chapters.length + 1))
        }
      >
        Add Chapter
      </button>
    </>
  );
}

export default Book;
