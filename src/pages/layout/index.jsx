import { request } from "@/utils"
import { useEffect } from "react"
function Layout() {
    const getUserProfile = async () => {
        const { data: { data } } = await request.get('/user/profile')
        console.log(data)
    }
    useEffect(() => {
        getUserProfile()
    }, [])
    return (
        <div>
            this is layout
        </div>
    )
}
export default Layout