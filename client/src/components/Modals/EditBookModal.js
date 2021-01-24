import { useState, useContext } from 'react';
import { ActiveBookContext } from '../../App';
import DeleteButton from '../EditIcons/DeleteButton';
import AddButton from '../EditIcons/AddButton';
import style from './css/modals.module.css';

function EditBookModal() {
  const { activeBook: book, saveEdits, setEditModalOpen } = useContext(
    ActiveBookContext
  );
  const [title, setTitle] = useState(book.title);
  const [authors, setAuthors] = useState(book.authors);
  const [image, setImage] = useState(book.image);
  const [categories, setCategories] = useState(book.categories);

  const handleAuthorChange = (oldValue, newValue) => {
    let index = authors.findIndex((author) => author === oldValue);
    if (index === -1) {
      index = authors.length++;
    }
    let newArray = [...authors];
    newArray[index] = newValue || '';
    setAuthors(newArray);
  };
  const handleAuthorDelete = (value) => {
    let newArray = authors.filter((author) => author !== value);
    setAuthors(newArray);
  };
  const handleCategoryChange = (oldValue, newValue) => {
    let index = categories.findIndex((category) => category === oldValue);
    if (index === -1) {
      index = categories.length++;
    }
    let newArray = [...categories];
    newArray[index] = newValue || '';
    setCategories(newArray);
  };
  const handleCategoryDelete = (value) => {
    let newArray = categories.filter((category) => category !== value);
    setCategories(newArray);
  };
  return (
    <div className={style.modal}>
      <div className={style.imageContainer}>
        <img src={image} alt={`The ${book.title} cover`}></img>
        <label forhtml='imageurl'>Url:</label>
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </div>
      <div className={style.data}>
        <label forhtml='title'>Title:</label>
        <input
          id='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label forhtml='authors'>Authors:</label>
        {authors.map((author, index) => (
          <div key={index}>
            <input
              id='authors'
              value={author}
              onChange={(event) => {
                handleAuthorChange(author, event.target.value);
              }}
            />
            <DeleteButton activate={() => handleAuthorDelete(author)} />
          </div>
        ))}
        <AddButton activate={() => handleAuthorChange()} />
        <label forhtml='categories'>Categories:</label>
        {categories.map((category, index) => (
          <div key={index}>
            <input
              value={category}
              onChange={(event) => {
                handleCategoryChange(category, event.target.value);
              }}
            />
            <DeleteButton activate={() => handleCategoryDelete(category)} />
          </div>
        ))}
        <AddButton activate={() => handleCategoryChange()} />
      </div>
      <div className={style.decisionButtons}>
        <button
          onClick={() => saveEdits({ title, authors, image, categories })}
        >
          Save
        </button>
        <button onClick={() => setEditModalOpen(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default EditBookModal;
