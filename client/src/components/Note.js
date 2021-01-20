import { useState } from 'react';
import style from '../css/BookBlurb.module.css';
import { noteTypes } from '../lib/constants';

function Note({ note, saveNote }) {
  const [isNoteEditable, setNoteEditable] = useState(note.new ? true : false);
  const [isTypeDropdownVisible, setTypeDropdownVisible] = useState(false);
  const [noteType, setNoteType] = useState(note.noteType);
  const [content, setContent] = useState(note.content);
  const [pageNumber, setPageNumber] = useState(note.pageNumber);
  const [myReaction, setMyReaction] = useState(note.myReaction);

  return (
    <div>
      <div
        onClick={() => {
          isNoteEditable && setTypeDropdownVisible(true);
        }}
        className={style[`dot-${noteType}`]}
      ></div>
      {isTypeDropdownVisible && (
        <select
          value={noteType}
          onChange={(event) => {
            setTypeDropdownVisible(false);
            setNoteType(event.target.value);
          }}
        >
          {noteTypes.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )}
      <form>
        <label htmlFor='content'>
          {`${noteType.charAt(0).toUpperCase() + noteType.slice(1)}:`}
        </label>
        <textarea
          id='content'
          disabled={!isNoteEditable}
          onChange={(event) => setContent(event.target.value)}
          value={content}
        ></textarea>
        <textarea
          id='myReaction'
          disabled={!isNoteEditable}
          onChange={(event) => setMyReaction(event.target.value)}
          value={myReaction}
        ></textarea>
        <label htmlFor='pageNumber'>Page#</label>
        <input
          type='number'
          id='pageNumber'
          disabled={!isNoteEditable}
          onChange={(event) => setPageNumber(event.target.value)}
          value={pageNumber}
        ></input>
      </form>
      <button
        onClick={() => {
          if (isNoteEditable) {
            saveNote(note.id, {
              noteType,
              content,
              myReaction,
              pageNumber,
              id: note.id,
              new: false,
            });
            setTypeDropdownVisible(false);
          }
          setNoteEditable(!isNoteEditable);
        }}
      >
        {isNoteEditable ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}

export default Note;
