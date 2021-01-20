import { useState, useEffect } from 'react';
import Note from '../components/Note';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import style from '../css/Chapter.module.css';
import { noteTypes } from '../lib/constants';

function Chapter({ chapter, saveChapter }) {
  const [summary, setSummary] = useState(chapter.summary);
  const [isSummaryDisabled, setSummaryDisabled] = useState(true);

  const addNote = (noteType) => {
    saveChapter(chapter.chapterNumber, [
      ...chapter.notes,
      {
        noteType,
        id: chapter.notes.length + 1,
        content: `New ${noteType}`,
        pageNumber: '0',
        new: true,
      },
    ]);
  };

  const saveNote = (id, newNote) => {
    let index = chapter.notes.findIndex((note) => note.id === id);
    chapter.notes[index] = newNote;
    saveChapter(chapter.chapterNumber, chapter.notes);
  };

  useEffect(() => {
    setSummary(chapter.summary);
  }, [chapter]);

  return (
    <section className={style.chapter}>
      <div className={style.titleBar}>
        <h3>Chapter {chapter.chapterNumber}:</h3>
        <textarea
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          disabled={isSummaryDisabled}
          placeholder={'Write a summary...'}
        ></textarea>
        <section className={style.buttonRow}>
          <EditButton
            text={isSummaryDisabled ? 'Edit' : 'Save'}
            activate={() => {
              setSummaryDisabled(!isSummaryDisabled);
              saveChapter(chapter.chapterNumber, { summary });
            }}
          />
          {!isSummaryDisabled && <DeleteButton />}
        </section>
      </div>
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
    </section>
  );
}

export default Chapter;
