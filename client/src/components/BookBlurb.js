import style from '../css/BookBlurb.module.css';

function BookBlurb({ book, setActiveBook, isActivated, deleteBook }) {
  return (
    <div
      className={`${style.book} ${isActivated && style.activated}`}
      onClick={() => {
        isActivated ? setActiveBook() : setActiveBook(book);
      }}
    >
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      {isActivated && (
        <button onClick={() => deleteBook(book.id)}>Delete</button>
      )}
    </div>
  );
}

export default BookBlurb;
