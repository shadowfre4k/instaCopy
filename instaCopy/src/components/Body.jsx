import './Body.css'
import Picture from './Picture'
import UserName from './UserName'
import Following from './Following'
import Details from './Details'
import StoryBubbles from './StoryBubbles'
import Gallery from './Gallery.jsx'

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
                    <Gallery />
            </div>
        </h1>
    )
}