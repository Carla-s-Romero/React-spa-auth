import { useCallback, useEffect, useState } from "react";
import { apiHttp } from "../api";
import { useAuth } from "./useAuth";

export const usePostInteractions = (initialPost) => {
  const [likes, setLikes] = useState(initialPost?.likes ?? 0);
  const [comments, setComments] = useState(initialPost?.comments ?? []);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (initialPost) {
      setLikes(initialPost.likes ?? 0);
      setComments(initialPost.comments ?? []);
    }
  }, [initialPost]);

  const handleNewComment = useCallback((comment) => {
    setComments((currentComments) => [comment, ...currentComments]);
  }, []);

  const handleLikeButton = useCallback(
    async (postId = initialPost?.id) => {
      if (postId == null) {
        return;
      }

      try {
        await apiHttp.post(`blog-posts/${postId}/like`);
        setLikes((currentLikes) => currentLikes + 1);
      } catch (error) {
        console.error("Erro ao curtir publicação:", error);
      }
    },
    [initialPost?.id],
  );

  const handleDeleteComment = useCallback(async (commentId) => {
    if (!confirm("Tem certeza que deseja excluir este comentário?")) {
      return;
    }

    try {
      await apiHttp.delete(`comments/${commentId}`);
      setComments((currentComments) =>
        currentComments.filter((comment) => comment.id !== commentId),
      );
    } catch (error) {
      console.error("Erro ao excluir comentário:", error);
    }
  }, []);

  return {
    likes,
    comments,
    isAuthenticated,
    handleNewComment,
    handleLikeButton,
    handleDeleteComment,
  };
};
