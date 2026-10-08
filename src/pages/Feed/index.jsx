import { useEffect, useState } from "react"
import { CardPost } from "../../components/CardPost"
import styles from './feed.module.css'

export const Feed = () => {
    const [posts, SetPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/blog-posts')
        .then(response => response.json())
        .then(data => SetPosts(data))
    }, [])
    return (
        <main className={styles.grid}>
            {posts.map(post => <CardPost key={post.slug} post={post} />)}
        </main>
    )
}