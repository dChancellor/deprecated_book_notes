import style from './css/edit-buttons.module.css';
import Pencil from './svg/Pencil.js';

function EditButton({ activate }) {
  return (
    <button className={`${style.svgContainer}`} onClick={() => activate()}>
      <Pencil className={`${style.svg} ${style.edit}`} />
    </button>
  );
}

export default EditButton;
