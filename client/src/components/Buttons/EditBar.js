import { useState } from 'react';
import SVGButton from './elements/SVGButton';

import style from './styles/SVGButtons.module.css';

function EditBar({ action, isVertical }) {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <section
      className={`${style.editButtons} ${
        isVertical ? style.buttonColumn : style.buttonRow
      }`}
    >
      {isEditable ? (
        <>
          <SVGButton
            svgType={'Save'}
            activate={() => {
              setIsEditable(!isEditable);
              action('save');
            }}
          />
          <SVGButton
            svgType={'Trash'}
            activate={() => {
              action('delete');
            }}
          />
        </>
      ) : (
        <SVGButton
          svgType={'Pencil'}
          activate={() => {
            setIsEditable(!isEditable);
            action('edit');
          }}
        />
      )}
    </section>
  );
}

export default EditBar;

// Buttons
