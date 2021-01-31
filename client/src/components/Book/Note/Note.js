import { useState } from 'react';
import ChevronDown from './EditIcons/svg/ChevronDown';
import style from '../css/Note.module.css';
import scheme from '../css/schemes.module.css';
import { noteTypes } from '../../../lib/constants';

function Note({ note, saveNote }) {
  const [isNoteEditable, setNoteEditable] = useState(note.new ? true : false);
  const [isTypeDropdownVisible, setTypeDropdownVisible] = useState(false);
  const [type, setType] = useState(note.type);
  const [content, setContent] = useState(note.content);
  const [isVisible, toggleVisibility] = useState(true);
  const [pageNumber, setPageNumber] = useState(note.pageNumber);
  const [myReaction, setMyReaction] = useState(note.myReaction);

  return (
    <div className={style.note}>
      {/* <div
        onClick={() => {
          isNoteEditable && setTypeDropdownVisible(true);
        }}
        className={style[`dot-${type}`]}
      ></div>
      {isTypeDropdownVisible && (
        <select
          value={type}
          onChange={(event) => {
            setTypeDropdownVisible(false);
            setType(event.target.value);
          }}
        >
          {noteTypes.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )} */}
      <form>
        <div className={`${style.upperWindow} ${scheme[type]} ${scheme.dark}`}>
          <div
            className={`${style.dot} ${scheme[type]} ${scheme.superdark} ${scheme.button}`}
          ></div>
          <label htmlFor='content'>
            {`${type.charAt(0).toUpperCase() + type.slice(1)}:`}
          </label>
          <textarea
            className={`${style.textarea} ${scheme[type]} ${scheme.light}`}
            id='content'
            disabled={!isNoteEditable}
            onChange={(event) => setContent(event.target.value)}
            value={content}
          ></textarea>
          <button
            className={`${style.downArrow} ${scheme[type]} ${scheme.lightText}`}
            onClick={() => toggleVisibility(!isVisible)}
          >
            <ChevronDown />
          </button>
        </div>
        {/* <label htmlFor='pageNumber'>Page#</label>
        <input
          type='number'
          id='pageNumber'
          disabled={!isNoteEditable}
          onChange={(event) => setPageNumber(event.target.value)}
          value={pageNumber}
        ></input>

        <textarea
          id='myReaction'
          disabled={!isNoteEditable}
          onChange={(event) => setMyReaction(event.target.value)}
          value={myReaction}
        ></textarea> */}
      </form>
    </div>
  );
}

export default Note;
