import { useState, useEffect } from 'react';
import Note from '../components/Note';
import style from '../css/BookNotes.module.css';
import { noteTypes } from '../lib/constants';

function Chapter({ chapter, saveChapter }) {
  const [summary, setSummary] = useState(chapter.summary);
  const [isSummaryDisabled, setSummaryDisabled] = useState(true);

  const addNote = (noteType) => {
    let data = { ...chapter };
    data.notes.push({
      noteType,
      id: data.notes.length + 1,
      content: `New ${noteType}`,
      pageNumber: '0',
      new:true
    });
    saveChapter(chapter.chapterNumber, data);
  };

  const saveNote = (data) => {
    let tempData = { ...chapter };
    let noteID = tempData.notes.findIndex((note) => note.id === data.id);
    tempData.notes[noteID] = { ...tempData[noteID], ...data };
    saveChapter(chapter.chapterNumber, tempData);
  };

  useEffect(() => {
    setSummary(chapter.summary);
  }, [chapter]);

  return (
    <>
      <h3>Chapter {chapter.chapterNumber}</h3>
      <textarea
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        disabled={isSummaryDisabled}
        placeholder={'Write a summary...'}
      ></textarea>
      <button
        onClick={() => {
          saveChapter(chapter.chapterNumber, { summary });
          setSummaryDisabled(!isSummaryDisabled);
        }}
      >
        {isSummaryDisabled ? 'Edit' : 'Save'}
      </button>
      <nav>
        {noteTypes.map((noteType, index) => (
          <button
            className={style.button}
            key={index}
            onClick={() => addNote(noteType)}
          >
            {`Add ${noteType}`}
          </button>
        ))}
      </nav>
      <section>
        {chapter.notes?.map((note) => (
          <Note saveNote={saveNote} key={note.id} note={note} />
        ))}
      </section>
    </>
  );
}

export default Chapter;
