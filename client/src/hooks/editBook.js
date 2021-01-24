import { useEffect, useState } from 'react';

const useEditBook = ({ activeBook: book, editType, edits, chapterId }) => {
  const [data, setData] = useState();
  let editedBook = { ...book };
  let chapterIndex = editedBook.chapters?.findIndex(
    (chapter) => chapter.id === chapterId
  );

  const handleBook = () => {};

  const handleChapter = () => {
    let chapters = editedBook.chapters;
    chapterIndex === -1
      ? chapters.push(edits)
      : (chapters[chapterIndex] = { ...chapters[chapterIndex], ...edits });
    let sorted = chapters.sort((a, b) => {
      return a.chapterNumber - b.chapterNumber;
    });
    editedBook.chapters = sorted;
    setData(editedBook);
  };

  const handleNote = () => {
    let noteIndex = editedBook.chapters[chapterIndex].notes.findIndex(
      (note) => note.id === edits.id
    );
    let notes = editedBook.chapters[chapterIndex].notes;
    noteIndex === -1
      ? notes.push(edits)
      : (notes[noteIndex] = { ...notes[noteIndex], ...edits });
    let sorted = notes.sort((a, b) => {
      return a.pageNumber - b.pageNumber;
    });
    editedBook.notes = sorted;
    setData(editedBook);
  };

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
