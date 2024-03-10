import "./UserName.css"
import { IoIosMore } from "react-icons/io";
import { BiUserPlus } from "react-icons/bi";

export default function UserName(){
    return(
    <div className="userOptions">
        <div className="userName">shadowfre4k_</div> 
        <button className="following">Following v</button>
        <button className="message">Message</button>
        <button className="icon"><BiUserPlus /></button>
        <h4><IoIosMore /></h4>
    </div>
    )
}