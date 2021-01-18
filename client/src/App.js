import { useState } from 'react';
import BookBlurb from './components/BookBlurb';
import Book from './views/Book';
import AddBook from './views/AddBook';

function App() {
  const [bookshelf, defineBookshelf] = useState([]);
  const [activeBook, setActiveBook] = useState();
  const [isAddBookVisible, setAddBookVisible] = useState(false);

  const addFakeBooks = () => {
    defineBookshelf([
      ...bookshelf,
      {
        id: 1111111,
        title: 'Test Title',
        author: 'Derek Holtzman',
        image: '',
        categories: 'Fiction',
        chapters: [],
      },
    ]);
  };

  const saveAnnotation = (newChapters) => {
    let index = bookshelf.findIndex((book) => book.id === activeBook.id);
    let revisedBook = {
      ...bookshelf[index],
      ...{chapters:[...newChapters]}
    };
    bookshelf.splice(index, 1, revisedBook)
    setActiveBook(bookshelf[index])
  };

  const deleteBook = (id) => {
    let index = bookshelf.findIndex((book) => book.id === id);
    bookshelf.splice(index, 1);
  };

  const addBook = (newBook) => {
    let doesBookExist = bookshelf.find(
      (book) => book.id === newBook.industryIdentifiers[0].identifier
    );
    if (!doesBookExist) {
      defineBookshelf([
        ...bookshelf,
        {
          id: newBook.industryIdentifiers[1].identifier,
          title: newBook.title,
          author: newBook.authors,
          image: newBook.imageLinks.thumbnail,
          categories: newBook.categories,
          chapters: [],
        },
      ]);
    } else {
      console.log('This book already exists');
    }
    setAddBookVisible(false);
  };

  return (
    <>
      <button onClick={() => addFakeBooks()}>Populate</button>
      <button onClick={() => setAddBookVisible(!isAddBookVisible)}>
        {isAddBookVisible ? 'Cancel' : 'Add Book'}
      </button>
      {isAddBookVisible && <AddBook addBook={addBook} />}
      <section>
        {bookshelf &&
          bookshelf.map((book) => (
            <BookBlurb
              isActivated={book.id === activeBook?.id ? true : false}
              setActiveBook={setActiveBook}
              key={book.id}
              book={book}
              deleteBook={deleteBook}
            />
          ))}
      </section>
      <section>
        {activeBook && (
          <Book
            saveAnnotation={saveAnnotation}
            chapters={activeBook.chapters}
          />
        )}
      </section>
    </>
  );
}

export default App;
