import './Body.css'
import Picture from './Picture'
import UserName from './UserName'
import Following from './Following'
import Details from './Details'
import StoryBubbles from './StoryBubbles'

export default function Body(){
    return(
        <h1 className='mainBody'>
            <div className='informationContainer'>
                <div className='picture'><Picture /></div>
                <div className='information'>
                    <UserName />
                    <Following />
                    <Details />
                </div>
               
            </div>
            <div className='storyBubbles'>
                    <StoryBubbles/>
            </div>
        </h1>
    )
}