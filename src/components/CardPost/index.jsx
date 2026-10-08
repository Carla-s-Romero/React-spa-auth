import { Author } from "../Author";
import styles from "./cardpost.module.css";
import { Link } from "react-router-dom";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { DialogComment } from "../DialogComment/index.jsx";
import { useState } from "react";
import { apiHttp } from "../../api/index.js";

export const CardPost = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    const accessToken = localStorage.getItem("access_token");

    apiHttp.post(`blog-posts/${post.id}/like`, {}, {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      })
      .then(() => {
          setLikes((oldState) => oldState + 1);
          console.log(`Post ${post.slug} liked! Total likes: ${likes + 1}`);
        })
  };

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
            <ThumbsUpButton loading={false} onClick={handleLike} />
            <p>{likes}</p>
          </div>
          <div className={styles.action}>
            <DialogComment />
            <p>{post.comments.length}</p>
          </div>
        </div>
        <Author author={post.author} />
      </footer>
    </article>
  );
};
