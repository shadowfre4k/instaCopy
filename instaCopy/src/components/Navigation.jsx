import './Navigation.css'

export default function Navigation(){
    return(
        <div className='mainNavContainer'>
            <h1 className='nav'>Instagram</h1>
            <ul className='navItems'>
                <p>Home</p>
                <p>Search</p>
                <p>Explore</p>
                <p>Reels</p>
                <p>Messages</p>
                <p>Notifications</p>
                <p>create</p>
                <p>profile</p>
            </ul>

            <div className='navFooter'>
                <p>Threads</p>
                <p>More</p>
            </div>
        </div>
    )
}