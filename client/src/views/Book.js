import { useContext } from 'react';
import { ActiveBookContext } from '../App';
import { ChapterObject } from '../lib/constants';
import Chapter from '../components/Book/Chapter/Chapter';
import PillButton from '../components/Buttons/elements/PillButton';
import style from './styles/Book.module.css';

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
      <PillButton
        styles={'addChapter'}
        activate={() => saveEdits(
          'chapter',
          new ChapterObject(book.chapters.length + 1)
        )}
        text={'Add Chapter'}
      />
    </>
  );
}

export default Book;
