import Blurb from '../components/Sidebar/Blurb';
import PillButton from '../components/Buttons/elements/PillButton';

import style from './styles/Sidebar.module.css';

function Sidebar({
  pinnedBook,
  activeBook,
  bookshelf,
  setActiveBook,
  toggleAddBookModal,
  toggleFilterModal,
  isFilterModalOpen,
  isAddBookModalOpen,
}) {
  return (
    <section className={style.sidebar}>
      <section className={style.books}>
        {bookshelf &&
          bookshelf.map((book) => (
            <Blurb
              isPinned={book.id === pinnedBook?.id ? true : false}
              isActivated={book.id === activeBook?.id ? true : false}
              setActiveBook={setActiveBook}
              key={book.id}
              book={book}
            />
          ))}
      </section>
      <section className={style.buttonRow}>
        <PillButton
          styles={`filter`}
          activate={() => toggleFilterModal(!isFilterModalOpen)}
          text={'Filter Books'}
        />
        <PillButton
          styles={`addBook`}
          activate={() => toggleAddBookModal(!isAddBookModalOpen)}
          text={'Add Book'}
        />
      </section>
    </section>
  );
}

export default Sidebar;
