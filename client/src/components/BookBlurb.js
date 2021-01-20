import style from '../css/BookBlurb.module.css';

function BookBlurb({ book, setActiveBook, isActivated, deleteBook }) {
  return (
    <section className={`${style.book} ${isActivated && style.activated}`}>
      <div
        className={style.text}
        onClick={() => {
          isActivated ? setActiveBook() : setActiveBook(book);
        }}
      >
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      {isActivated && (
        <div className={style.button} onClick={() => deleteBook(book.id)}>
          X
        </div>
      )}
    </section>
  );
}

export default BookBlurb;
