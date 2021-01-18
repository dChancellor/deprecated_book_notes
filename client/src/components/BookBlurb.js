import style from '../css/BookSelector.module.css'

function BookBlurb({ book, setActiveBook, isActivated, deleteBook }) {
  return (
    <div className={isActivated ? style.activatedBook : style.book} onClick={() => {isActivated ? setActiveBook() : setActiveBook(book)}}>
      <h3>{book.title}</h3> 
      <h5>{book.author}</h5>
      <button onClick={() => deleteBook(book.id)}>Delete</button>
    </div>
  );
}

export default BookBlurb;
