import './StoryBubbles.css'
import Bubble from './Bubble'
import pics from '../pictures/pics/'
import './Bubble.css'
export default function StoryBubbles(){
    return(
        
            <ul className="bubblesContainer">

                {pics.map((picture,image) =>  
                   <Bubble key={image} props={picture}/>
                   
              )}             
            </ul>
            
        
    )
}