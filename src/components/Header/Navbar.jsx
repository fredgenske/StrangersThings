import {Link, useNavigate} from "react-router-dom"
import Login from "./Login"

export default function Navbar(){
    
    const currentUser = localStorage.getItem("user")
    const navigate = useNavigate()

    return (
        <nav>
            <Link to="/">
                <div id="nav-logo">Stranger's Things</div>
            </Link>
            <div id="nav-content">
                {currentUser?
                    <>
                        <h3>{currentUser}</h3>
                        <button className="button-1" 
                            onClick={()=>{
                                localStorage.removeItem("token")
                                localStorage.removeItem("user")
                                navigate("/")
                            }}>
                            Log Out
                        </button>
                    </>
                    :
                    <Login/>
                }
            </div>
        </nav>
    )
}