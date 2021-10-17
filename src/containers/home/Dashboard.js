import Wrapper from "../../components/layouts/Wrapper"
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useEffect } from "react"

const Dashboard = () => {
    const history = useHistory()
    const { user } = useSelector((state) => state.log)

    // useEffect(() => {
    //     if (!user?.id) {
    //         history.push('/login')
    //     }
    // })
    return (
        <Wrapper>
            <h4>Welcome home</h4>
        </Wrapper>
    )
}

export default Dashboard
