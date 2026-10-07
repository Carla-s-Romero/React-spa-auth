import styles from "./comment.module.css";
import { Avatar } from "../Avatar";

export const Comment = ({ comment }) => {
  return (
    <div className={styles.divider} isEditing={true}>
      <Avatar author={comment.author} />
      <strong>@{comment.author.name}</strong>
      <p>{comment.text}</p>
    </div>
  );
};
