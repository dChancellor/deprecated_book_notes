import Trash from './svg/Trash';
import style from './css/edit-buttons.module.css';

function DeleteButton({ activate }) {
  return (
    <button
      className={`${style.svgContainer} ${style.deleteContainer}`}
      onClick={() => activate()}
    >
      <Trash className={`${style.svg} ${style.delete}`} />
    </button>
  );
}

export default DeleteButton;
