import React from 'react'
import styles from './style.css'

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.addNewComment}>
        <h2>Добавление нового комментария</h2>
        <label className={styles.form}>
          Автор комментария:
          <input className={styles.formAuthor} required className="form__author"></input>
          Текст:
          <textarea required className="form__text"></textarea>
          <button className={styles.formButton} type="submit">Добавить комментарий</button>
        </label>
      </form>
    </div>
  )
}

export default Form;
