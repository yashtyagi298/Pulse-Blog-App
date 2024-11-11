import { Link, useNavigate } from "react-router-dom"
import { Avtar } from "./BlogCard"


function Appbar() {
    const navigate = useNavigate();

    const handleLogout =()=>{
        localStorage.removeItem("authToen");
        navigate("/signin")
    }
    return (
        <div className="sticky top-0  bg-white border-b flex justify-between items-center  px-4 md:px-32 py-4 shadow-md transition-all duration-300 ">
            <div>
                <Link to={"/blogs"}>
                <div className="font-serif font-semibold text-xl">
                    Pulse
                </div>
                </Link>

            </div>
            {/* 2 -side */}
            <div className="flex flex-row items-center justify-evenly md:gap-6 gap-3">
                <div onClick={handleLogout} className="cursor-pointer font-semibold">Logout</div>
               <Link to="/publish">
               <button className="bg-emerald-500 text-white font-bold  text-xs px-3 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150" type="button"
                >
                  Post
                    </button>
               </Link>   
                <Avtar size={2} text={"xl"} name="yash"/>
            </div>
        </div>
    )
}

export default Appbar


