import "./Tabs.css"

export default function Tabs(){
    return(
       <div className="lineAndContainer">
            <hr className="lineBreak"></hr>
            <div className="tabContainer">
                <div><p>Posts</p></div>
                <div><p>Reels</p></div>
                <div><p>Tagged</p></div>
            </div>
       </div>
    )
}