import { useContext } from 'react';
import { ActiveBookContext } from '../App';
import EditButton from './EditIcons/EditButton';

import style from '../css/BookBlurb.module.css';

function BookBlurb({ book, setActiveBook, isActivated }) {
  const { setEditModalOpen } = useContext(ActiveBookContext);

  return (
    <section className={`${style.book} ${isActivated && style.activated}`}>
      <div
        className={style.text}
        onClick={() => {
          isActivated ? setActiveBook() : setActiveBook(book);
        }}
      >
        <h3>{book.title}</h3>
        {book.authors.map((author) => (
          <p key={author}>{author}</p>
        ))}
      </div>
      {isActivated && <EditButton activate={() => setEditModalOpen(true)} />}
    </section>
  );
}

export default BookBlurb;
