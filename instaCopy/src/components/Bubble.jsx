import './Bubble.css'
// import bubble1 from '../pictures/Selfie.jpg'

export default function Bubble({props}){

    return(

        
        <div>
            
            <p className='bubbles'>
             <img src={require{"../pictures/Selfie.jpg"}} alt ={props.bubbleTitle}/>
            </p>
            <h6 className='bubbleName'> {props.bubbleTitle}</h6>
        </div>
    )
}