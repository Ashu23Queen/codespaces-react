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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                    
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="../../profile pic.jpg" alt=""   />
                <i className="topSearchIcon fab fa-facebook-search"></i>
            </div>
        </div>
    )
}