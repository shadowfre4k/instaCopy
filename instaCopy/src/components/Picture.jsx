import selfie from "../pictures/Selfie.jpg"
import "./Pictures.css"


export default function Picture(){
    return(
    <div className="mainPic">
        <img src={selfie} alt ="selfie" />
    </div>
    )
}