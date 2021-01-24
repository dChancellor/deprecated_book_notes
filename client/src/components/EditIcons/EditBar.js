import { useState } from 'react';
import SaveButton from './SaveButton';
import EditButton from './SaveButton';
import DeleteButton from './DeleteButton';

import style from './css/edit-buttons.module.css';

function EditBar({ action, isVertical }) {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <section className={isVertical ? style.buttonColumn : style.buttonRow}>
      {isEditable ? (
        <>
          <SaveButton
            isEditable={isEditable}
            activate={() => {
              setIsEditable(!isEditable);
              action('save');
            }}
          />
          <DeleteButton
            activate={() => {
              action('delete');
            }}
          />
        </>
      ) : (
        <EditButton
          isEditable={isEditable}
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
