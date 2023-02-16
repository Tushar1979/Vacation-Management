import {Link} from 'react-router-dom'
function Header() {
    
    return (
        <div className="nav-box">
            <div>
                
                <Link to='/ApplayForLeave' ><span>Applay for leave</span></Link>
            </div>
            <div>
                <Link to='/ViewLeaveCalender'> <span>Leave Record</span></Link>
               

            </div>
        </div>
    );
}

export default Header;