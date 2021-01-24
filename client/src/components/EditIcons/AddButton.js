import Plus from './svg/Plus';
import style from './css/edit-buttons.module.css';

function AddButton({ activate }) {
  return (
    <button
      className={`${style.svgContainer} ${style.plusContainer}`}
      onClick={() => activate()}
    >
      <Plus className={`${style.svg} ${style.plus}`} />
    </button>
  );
}

export default AddButton;
