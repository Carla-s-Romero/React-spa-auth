import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth.js"
import { useNavigate } from "react-router-dom"

export const Logout = () => {

    const { logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        logout()
        navigate('/auth/login')
    }, [logout, navigate])

    return null

}