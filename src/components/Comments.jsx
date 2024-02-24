import React, { useState } from 'react';

const CommentSection = () => {

  const userName = 'Flaco'  
  const [comments, setComments] = useState([]);
  //const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

//   const handleUserNameChange = (event) => {
//     setUserName(event.target.value);
//   };
  

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleAddComment = () => {
    const newComment = {
      userName: userName,
      UserID : '',
      dateTime: new Date().toLocaleString(),
      commentText: commentText,
    };
    console.log(newComment)
    setComments([...comments, newComment]);
    //setUserName('');
    setCommentText('');
  };

  const DeleteComment = () => {
  }

  return (
    <div>
      <h2>Comentarios</h2>
      <div>
        <label htmlFor="userName">{userName}</label>
      </div>
      <div>
        <label htmlFor="commentText">Comentario:</label>
        <textarea
          id="commentText"
          value={commentText}
          onChange={handleCommentTextChange}
        ></textarea>
      </div>
      <button onClick={handleAddComment}>Agregar Comentario</button>

      <div>
        <h3>Lista de Comentarios</h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>
              <strong>{comment.userName}</strong> - {comment.dateTime}
            </p>
            <p>{comment.commentText}</p>
            <button onClick={DeleteComment}>eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
