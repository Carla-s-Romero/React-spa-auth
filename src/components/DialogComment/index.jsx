import { useRef, useState } from "react"
import { IconButton } from "../IconButton"
import { Dialog } from "../Dialog/index.jsx"
import { Textarea } from "../Textarea"
import { Subheading } from "../Subheading"
import { IconChat } from "../icons/IconChat"
import { IconArrowFoward } from "../icons/IconArrowFoward"
import { Spinner } from "../Spinner"
import styles from './commentmodal.module.css'
import { Button } from "../Button"

export const DialogComment = ({ isEditing }) => {
    const dialogRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const onSubmit = async (formData) => {
        const text = formData.get('text')

        if (!text.trim()) return

        try {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 2000)
            dialogRef.current.closeModal()
        } catch (error) {
            console.error('Erro ao criar/atualizar comentário:', error)
        }
    }
    return (
        <>
            <Dialog ref={dialogRef}>
                <form action={onSubmit}>
                    <Subheading>{isEditing ? 'Editar comentário:' : 'Deixe seu comentário sobre o post:'}</Subheading>
                    <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
                    <div className={styles.footer}>
                        <Button disabled={loading} type="submit">
                            {loading ? <Spinner /> : <>
                                {isEditing ? 'Atualizar' : 'Comentar'} <IconArrowFoward />
                            </>}
                        </Button>
                    </div>
                </form>
            </Dialog>
            <IconButton
                onClick={() => dialogRef.current.openModal()}
            >
                <IconChat fill={isEditing ? '#000' : '#888888'} />
            </IconButton>
        </>
    )
}