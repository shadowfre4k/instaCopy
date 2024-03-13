import './StoryBubbles.css'
import Bubble from './Bubble'
import pics from '../pictures/pics/'
export default function StoryBubbles(){
    return(
        
            <ul className="bubblesContainer">

                {pics.map(picture => <Bubble props={picture} />)}
                
                
                
                {/* <Bubble />
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble /> */}


            </ul>
            
        
    )
}