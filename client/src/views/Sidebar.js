import BookBlurb from '../components/BookBlurb';

import style from '../css/Sidebar.module.css';

function Sidebar({
  activeBook,
  bookshelf,
  setActiveBook,
  setAddBookModalOpen,
  setFilterModalOpen,
  isFilterModalOpen,
  isAddBookModalOpen,
}) {
  return (
    <section className={style.sidebar}>
      <section className={style.books}>
        {bookshelf &&
          bookshelf.map((book) => (
            <BookBlurb
              isActivated={book.id === activeBook?.id ? true : false}
              setActiveBook={setActiveBook}
              key={book.id}
              book={book}
            />
          ))}
      </section>
      <section className={style.buttonRow}>
        <button
          className={`${style.filterButton} ${style.button}`}
          onClick={() => setFilterModalOpen(!isFilterModalOpen)}
        >
          Filter Books
        </button>
        <button
          className={`${style.addButton} ${style.button}`}
          onClick={() => setAddBookModalOpen(!isAddBookModalOpen)}
        >
          Add Book
        </button>
      </section>
    </section>
  );
}

export default Sidebar;
