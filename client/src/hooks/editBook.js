import { useEffect, useState } from 'react';

const useEditBook = ({ activeBook: book, editType, edits, id }) => {
  const [data, setData] = useState();

  const handleBook = (editedBook) => {
    setData(editedBook);
  };

  const handleChapter = () => {
    let index = book.chapters.findIndex((chapter) => chapter.id === id);
    let editedBook = { ...book };
    if (index >= 0) {
      //Replace existing chapter
      edits = { ...editedBook.chapters[index], ...edits };
      editedBook.chapters[index] = edits;
    } else {
      //Add new chapter
      edits.chapterNumber = editedBook.chapters.length + 1;
      editedBook.chapters.push(edits);
    }
    handleBook(editedBook);
  };

  const handleNote = () => {};

  useEffect(() => {
    switch (editType) {
      case 'book':
        handleBook();
        break;
      case 'chapter':
        handleChapter();
        break;
      case 'note':
        handleNote();
        break;
      default:
    }
  }, [edits, editType]);

  return { data };
};

export default useEditBook;
