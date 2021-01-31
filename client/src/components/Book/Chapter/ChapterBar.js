import { useState } from 'react';
import EditBar from '../../Buttons/EditBar';
import SVGButton from '../../Buttons/elements/SVGButton';

import style from './styles/ChapterBar.module.css';

function ChapterBar({
  handleButtonAction,
  chapter,
  isEditable,
  toggleVisibility,
}) {
  const [summary, setSummary] = useState(chapter.summary);
  const [chapterNumber, setChapterNumber] = useState(chapter.chapterNumber);

  return (
    <>
      <SVGButton svgType='ChevronDown' activate={toggleVisibility} />
      <h3>{`Chapter ${chapter.chapterNumber}`}</h3>
      {isEditable && (
        <div>
          <button onClick={() => setChapterNumber(chapterNumber + 1)}>+</button>
          <button onClick={() => setChapterNumber(chapterNumber - 1)}>-</button>
        </div>
      )}
      <textarea
        className={style.textArea}
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        disabled={!isEditable}
        placeholder={'Write a summary...'}
      ></textarea>
      <EditBar action={() => handleButtonAction} isVertical={true} />
    </>
  );
}

export default ChapterBar;

/* <button
className={style.downArrow}
onClick={() => toggleVisibility(!isVisible)}
>
<ChevronDown />
</button>
<h3>Chapter {chapterNumber}:</h3> */
