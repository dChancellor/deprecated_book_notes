import Plus from '../svg/Plus';
import Pencil from '../svg/Pencil';
import ChevronDown from '../svg/ChevronDown';
import Pin from '../svg/Pin';
import Save from '../svg/Save';
import Trash from '../svg/Trash';

import style from '../styles/SVGButtons.module.css';

function SVGButton({ pinned, svgType, activate }) {
  return (
    <button className={`${style.svgContainer}`} onClick={() => activate()}>
      {svgReducer(svgType, pinned)}
    </button>
  );
}

export default SVGButton;

function svgReducer(input, pinned) {
  let reducer;
  switch (input) {
    case 'Plus':
      reducer = (
        <Plus
          className={`${style.svg} ${style.plus}`}
        />
      );
      break;
    case 'ChevronDown':
      reducer = <ChevronDown className={`${style.svg} ${style.chevronDown}`} />;
      break;
    case 'Pin':
      reducer = <Pin className={`${style.svg} ${style.pin} ${pinned && style.pinned}`} />;
      break;
    case 'Save':
      reducer = <Save className={`${style.svg} ${style.save}`} />;
      break;
    case 'Pencil':
      reducer = <Pencil className={`${style.svg} ${style.pencil}`} />;
      break;
    case 'Trash':
      reducer = <Trash className={`${style.svg} ${style.trash}`} />;
      break;
    default:
  }
  return reducer;
}
