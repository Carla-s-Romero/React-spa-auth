import { useRef, useState } from "react";
import { IconButton } from "../IconButton";
import { Dialog } from "../Dialog/index.jsx";
import { Textarea } from "../Textarea";
import { Subheading } from "../Subheading";
import { IconChat } from "../icons/IconChat";
import { IconArrowFoward } from "../icons/IconArrowFoward";
import { Spinner } from "../Spinner";
import styles from "./commentmodal.module.css";
import { Button } from "../Button";
import { apiHttp } from "../../api/index.js";
import { useAuth } from "../../hooks/useAuth.js";

export const DialogComment = ({ isEditing, onSuccess, postId, commentId, defaultValue = "" }) => {
  const dialogRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const onSubmit = async (formData) => {
    const token = localStorage.getItem("access_token");
    const text = formData.get("text");
    if (!text.trim()) return;
    try {
      setLoading(true);
      if (isEditing) {
         await apiHttp.patch(
            `comments/${commentId}`, { text }, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then((response) => {
            dialogRef.current.closeModal();
            onSuccess(response.data);
            setLoading(false);
          });
      } else {
        await apiHttp.post(
            `comments/post/${postId}`, { text }, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then((response) => {
            dialogRef.current.closeModal();
            onSuccess(response.data);
            setLoading(false);
          });
      }
    } catch (error) {
      console.error("Erro ao criar/atualizar comentário:", error);
    }
  };
  return (
    <>
      <Dialog ref={dialogRef}>
        <form action={onSubmit}>
          <Subheading>
            {isEditing
              ? "Editar comentário:"
              : "Deixe seu comentário sobre o post:"}
          </Subheading>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
            defaultValue={defaultValue}
          />
          <div className={styles.footer}>
            <Button disabled={loading} type="submit">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {isEditing ? "Atualizar" : "Comentar"} <IconArrowFoward />
                </>
              )}
            </Button>
          </div>
        </form>
      </Dialog>
      <IconButton
        onClick={() => dialogRef.current.openModal()}
        disabled={!isAuthenticated}
      >
        <IconChat fill={isEditing ? "#000" : "#888888"} />
      </IconButton>
    </>
  );
};
