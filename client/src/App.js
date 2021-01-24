//Hooks
import { useState, createContext, useEffect } from 'react';
import useEditBook from './hooks/editBook';
//Components
import Sidebar from './views/Sidebar';
import PinnedNote from './views/PinnedNote';
import Book from './views/Book';
import EditBookModal from './components/Modals/EditBookModal';
import AddBookModal from './components/Modals/AddBookModal.js';
import FilterModal from './components/Modals/FilterModal';
//CSS
import style from './css/App.module.css';
//Data
import DEVpreloadedBooks from './lib/books.js';

const ActiveBookContext = createContext();

function App() {
  const [bookshelf, defineBookshelf] = useState(DEVpreloadedBooks);
  const [activeBook, setActiveBook] = useState({});
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [isAddBookModalOpen, setAddBookModalOpen] = useState(false);
  const [bookEdits, defineBookEdits] = useState({});
  const { data: editedBook } = useEditBook(bookEdits);

  const saveEdits = (editType, edits, id) => {
    defineBookEdits({ activeBook, editType, edits, id });
  };

  useEffect(() => {
    console.log(editedBook);
    setActiveBook(editedBook);
  }, [editedBook]);

  return (
    <ActiveBookContext.Provider value={{ activeBook, saveEdits }}>
      <main className={style.app}>
        <Sidebar
          setFilterModalOpen={setFilterModalOpen}
          setAddBookModalOpen={setAddBookModalOpen}
          setEditModalOpen={setEditModalOpen}
          bookshelf={bookshelf}
          activeBook={activeBook}
          setActiveBook={setActiveBook}
        />
        {isEditModalOpen && <EditBookModal />}
        {isAddBookModalOpen && <AddBookModal />}
        {isFilterModalOpen && <FilterModal />}
        <section className={style.main}>
          <PinnedNote />
          {activeBook && <Book />}
        </section>
      </main>
    </ActiveBookContext.Provider>
  );
}

export { App, ActiveBookContext };
