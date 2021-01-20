import style from '../css/Buttons.module.css';
import Trash from '../assets/Trash.js';

function DeleteButton({ activate }) {
  return (
    <button className={`${style.svgContainer} ${style.deleteContainer}`} onClick={() => activate}>
      <Trash className={`${style.svg} ${style.delete}`} />
    </button>
  );
}

export default DeleteButton;
