import Save from './svg/Save';
import style from './css/edit-buttons.module.css';

function SaveButton({ activate }) {
  return (
    <button
      className={`${style.svgContainer} ${style.deleteContainer}`}
      onClick={() => activate()}
    >
      <Save className={`${style.svg} ${style.save}`} />
    </button>
  );
}

export default SaveButton;
