import style from '../styles/PillButtons.module.css';

function PillButton({ activate, styles, text }) {
  return (
    <button
      className={`${style.button} ${styles && style[styles]}`}
      onClick={(event) => {
        event.target.blur();
        activate();
      }}
    >
      {text}
    </button>
  );
}

export default PillButton;
