import './Navigation.css'
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import selfie from "../pictures/Selfie.jpg"

export default function Navigation(){
    return(
        <div className='mainNavContainer'>
            <h1 className='nav'>Instagram</h1>
            <ul className='navItems'>
                <p> <GoHome value={{ className: 'react-icons' }}/> Home</p>
                <p> <IoIosSearch /> Search</p>
                <p> <MdOutlineExplore /> Explore</p>
                <p> <BiMoviePlay /> Reels</p>
                <p> <RiMessengerLine /> Messages</p>
                <p> <FaRegHeart /> Notifications</p>
                <p> <FaRegSquarePlus /> Create</p>
                <p> <img className='navSelfie' src={selfie} alt ="navSelfie" /> Profile</p>
            </ul>

            <div className='navFooter'>
                <p>Threads</p>
                <p>More</p>
            </div>
        </div>
    )
}