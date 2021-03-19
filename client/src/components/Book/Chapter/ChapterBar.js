import { useState } from 'react';
import EditBar from '../../Buttons/EditBar';

import style from './styles/ChapterBar.module.css';

function ChapterBar({
  handleButtonAction,
  chapter,
  isEditable,
  toggleVisibility,
}) {
  const [summary, setSummary] = useState(chapter.summary);

  return (
    <div className={style.chapterBar}>
      <textarea
        className={`${style.textArea} ${style.summary} ${
          isEditable && style.editable
        }`}
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        disabled={!isEditable}
        placeholder={'Write a summary...'}
      ></textarea>
      <EditBar
        action={(action) => handleButtonAction(action, summary)}
        isVertical={true}
      />
    </div>
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
