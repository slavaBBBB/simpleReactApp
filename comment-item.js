import React from 'react'
import styles from './style.css'
import * as bootstrap from 'bootstrap'

const CommentItem = (props) => {
  return (
    <li className={styles.commentItem}>
      <div className={styles.commentHead}>
        <span className={styles.commentAuthor}>{props.author}</span>
        <button className={styles.commentDelete} onClick={props.deleteComment}></button>
      </div>
      <span className={styles.commentText}>{JSON.parse(localStorage.getItem(props.author)).comment}</span>
      <span className={styles.commentDate}>{JSON.parse(localStorage.getItem(props.author)).date}</span>
    </li>
  )
}

export default CommentItem;
