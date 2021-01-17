import { useState, useEffect } from 'react';
import BookBlurb from './components/BookBlurb';
import Book from './views/Book';
import AddBook from './views/AddBook'
import books from './lib/books';

function App() {
  const [filteredBookList, defineFilteredBookList] = useState(books);
  const [activeBook, setActiveBook] = useState();
  const [annotation, setAnnotation] = useState();
  const [isAddBookVisible, setAddBookVisible] = useState(false);
  
  const saveAnnotation = (data) => {
    let tempData = { ...activeBook };
    tempData.chapters = data;
    setActiveBook(tempData);
  };

  const addBook = (parameter) =>{
    setAddBookVisible(false)
  }

  // Loads the new notes on book swap
  useEffect(() => {
    // TODO Delete this for production
    if (activeBook) {
      let tempData = [...filteredBookList];
      tempData[activeBook.id] = activeBook;
      defineFilteredBookList(tempData);
    }
    // Save this
    activeBook && setAnnotation(activeBook.chapters);
  }, [activeBook]);

  return (
    <>
      <button onClick={() =>
        setAddBookVisible(!isAddBookVisible)
      }>{isAddBookVisible ? 'Cancel' : 'Add Book'}</button>
      {isAddBookVisible && <AddBook addBook={addBook}/>}
      <section>
        {filteredBookList &&
          filteredBookList.map((book) => (
            <BookBlurb
              isActivated={book.id === activeBook?.id ? true : false}
              setActiveBook={setActiveBook}
              key={book.id}
              book={book}
            />
          ))}
      </section>
      <section>
        {activeBook && <Book saveAnnotation={saveAnnotation} annotation={annotation} />}
      </section>
    </>
  );
}

export default App;
