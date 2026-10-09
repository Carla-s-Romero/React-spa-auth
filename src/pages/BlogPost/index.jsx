import styles from "./blogpost.module.css";
import { ThumbsUpButton } from "../../components/CardPost/ThumbsUpButton";
import { DialogComment } from "../../components/DialogComment/index.jsx";
import { Author } from "../../components/Author";
import Typography from "../../components/Typography";
import { CommentList } from "../../components/CommentList";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiHttp } from "../../api/index.js";
import { usePostInteractions } from "../../hooks/usePostInteractions.js";

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const {
    likes,
    comments,
    isAuthenticated,
    handleNewComment,
    handleLikeButton,
    handleDeleteComment,
  } = usePostInteractions(post);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await apiHttp.get(`blog-posts/slug/${slug}`);
        setPost(response.data);
      } catch (error) {
        console.error("Erro ao buscar post:", error);

        if (error.response?.status === 404) {
          navigate("/not-found");
        }
      }
    };

    fetchPost();
  }, [slug, navigate]);

  if (!post) {
    return null;
  }

  return (
    <main className={styles.main}>
      <article className={styles.card}>
        <header className={styles.header}>
          <figure className={styles.figure}>
            <img
              src={post.cover}
              alt={`Capa do post de titulo: ${post.title}`}
            />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
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
              <DialogComment
                onSuccess={handleNewComment}
                postId={post.id}
              />
              <p>{comments.length}</p>
            </div>
          </div>
          <Author author={post.author} />
        </footer>
      </article>
      <Typography variant="h3">Código:</Typography>
      <div className={styles.code}>
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
      </div>
      <CommentList comments={comments} onDelete={handleDeleteComment} />
    </main>
  );
};
