import './Bubble.css'
import bubble1 from '../pictures/Selfie.jpg'
export default function Bubble(){
    return(
        <p className='bubbles'>
           <img src={bubble1} alt ="bubble1"/>
        </p>
    )
}