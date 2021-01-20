import style from '../css/Buttons.module.css';
import Pencil from '../assets/Pencil.js';

function EditButton({ activate }) {
  return (
    <button className={`${style.svgContainer}`} onClick={() => activate()}>
      <Pencil className={`${style.svg} ${style.edit}`} />
    </button>
  );
}

export default EditButton;
