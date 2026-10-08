import { useEffect, useState } from "react"
import { CardPost } from "../../components/CardPost"
import styles from './feed.module.css'
import { apiHttp } from "../../api"

export const Feed = () => {
    const [posts, SetPosts] = useState([])

    useEffect(() => {
        apiHttp.get('blog-posts')
        .then(response => SetPosts(response.data))
    }, [])

    return (
        <main className={styles.grid}>
            {posts.map(post => <CardPost key={post.slug} post={post} />)}
        </main>
    )
}