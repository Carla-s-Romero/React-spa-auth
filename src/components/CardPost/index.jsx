import { Author } from "../Author";
import styles from "./cardpost.module.css";
import { Link } from "react-router-dom";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { DialogComment } from "../DialogComment/index.jsx";
import { usePostInteractions } from "../../hooks/usePostInteractions.js";

export const CardPost = ({ post }) => {
  const {
    likes,
    comments,
    isAuthenticated,
    handleNewComment,
    handleLikeButton,
  } = usePostInteractions(post);

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure className={styles.figure}>
          <img src={post.cover} alt={`Capa do post de titulo: ${post.title}`} />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/blog-post/${post.slug}`}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <div className={styles.actions}>
          <div className={styles.action}>
            <ThumbsUpButton
              loading={false}
              onClick={() => handleLikeButton(post.id)}
              disabled={!isAuthenticated}
            />
            <p>{likes}</p>
          </div>
          <div className={styles.action}>
            <DialogComment onSuccess={handleNewComment} postId={post.id} />
            <p>{comments.length}</p>
          </div>
        </div>
        <Author author={post.author} />
      </footer>
    </article>
  );
};
