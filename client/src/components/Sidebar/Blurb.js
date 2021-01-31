import { useContext } from 'react';
import { ActiveBookContext } from '../../App';
import SVGButton from '../Buttons/elements/SVGButton';

import style from './styles/Blurb.module.css';

function Blurb({ book, setActiveBook, isActivated, isPinned }) {
  const { toggleEditModal, setPinnedBook } = useContext(ActiveBookContext);

  return (
    <section
      className={`${style.book} ${isPinned && style.pinned} ${
        isActivated && style.activated
      }`}
    >
      <div className={style.pin}>
        {isActivated && (
          <SVGButton
            svgType={'Pin'}
            pinned={isPinned}
            activate={() => setPinnedBook(book)}
          />
        )}
      </div>
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
      {isActivated && (
        <SVGButton svgType={'Pencil'} activate={() => toggleEditModal(true)} />
      )}
    </section>
  );
}

export default Blurb;
