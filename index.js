import React from 'react'
import ReactDOM from 'react-dom'
import Form from './form'
import CommentItem from './comment-item'
import styles from './style.css'

class CommentApp extends React.Component {
  constructor(){
    super();

    this.state = {
      comments: []
    }

    this.addNewComment = this.addNewComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  addNewComment(e) {
    e.preventDefault();
    const authorValue = document.querySelector('.form__author').value;
    const textValue = document.querySelector('.form__text').value;
    const commentsArray = this.state.comments;
    const newComment = {
      author: authorValue,
      text: textValue,
      date: new Date()
    }
    commentsArray.push(newComment);
    let options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    localStorage.setItem(newComment.author, JSON.stringify({comment: newComment.text,
                                                            date: newComment.date.toLocaleDateString("en-US", options)
                                                          }));
    document.querySelector('.form__author').value = '';
    document.querySelector('.form__text').value = '';
    this.setState({
      comments: commentsArray
    })
  }

  deleteComment(index) {
    for (let i = 0; i < localStorage.length; i++) {
      if (index == i) {
        const commentsArray = this.state.comments;
        commentsArray.splice(index, 1);
        const key = localStorage.key(i);
        localStorage.removeItem(key);
        this.setState({
          comments: commentsArray
        })
      }
    }
  }

  render() {
    const arrayOfKeys = Object.keys(localStorage);
    return (
      <div className={styles.comment}>
        <div>
          <h2>Комментарии</h2>
          <ol className={styles.commentList}>
          {
            arrayOfKeys.map((storageAuthor, i) => {
              return(
                <CommentItem
                  key={i}
                  author={storageAuthor}
                  deleteComment={this.deleteComment.bind(this, i)}
                />
              )
            })
          }
          </ol>
        </div>
        <Form
          addNewComment={this.addNewComment.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <CommentApp />,
  document.getElementById('main')
);
