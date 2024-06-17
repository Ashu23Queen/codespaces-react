import "./topbar.css";

export default function TopBar(){
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-facebook-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">write</li>
                    <li className="topListItem">Logout</li>
                    
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="../../profile pic.jpg" alt=""   />
                <i className="topSearchIcon fab fa-facebook-search"></i>
            </div>
        </div>
    )
}