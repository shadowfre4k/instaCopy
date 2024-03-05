import './Navigation.css'

export default function Navigation(){
    return(
        <div className='mainNavContainer'>
            <h1 className='nav'>Instagram</h1>
            <ul className='navItems'>
                <li>Home</li>
                <li>Search</li>
                <li>Explore</li>
                <li>Reels</li>
                <li>Messages</li>
                <li>Notifications</li>
                <li>create</li>
                <li>profile</li>
            </ul>

            <div className='navFooter'>
                <p>Threads</p>
                <p>More</p>
            </div>
        </div>
    )
}