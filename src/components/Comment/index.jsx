import styles from "./comment.module.css";
import { Avatar } from "../Avatar";
import { DialogComment } from "../DialogComment";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export const Comment = ({ comment }) => {
  const [text, setText] = useState(comment.text);
  const { user } = useAuth();
  const isOwner = user && (user.id === comment.author.id);

  const handleCommentUpdate = (newComment) => {
    setText(newComment.text);
  }
  return (
    <div className={styles.comment} >
      <Avatar author={comment.author} />
      <strong>@{comment.author.name}</strong>
      <p>{text}</p>
      <div className={styles.divider} />
      {isOwner && <DialogComment 
      isEditing={true} 
      onSuccess={handleCommentUpdate} 
      defaultValue={text} 
      commentId={comment.id} />}
    </div>
  );
};
