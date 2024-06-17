 
 
import "./singlePost.css";

export default function SinglePost(){
    return(
          <div className="singlePost">
              <div className="singlePostWrapper">
                <img src="thumbnail.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam cum ita placeat, ne eorum quidem bonorum, quae nos bona vere appellemus, frequentia beatiorem vitam fieri aut magis expetendam aut pluris aestimandam, certe minus ad beatam vitam pertinet multitudo corporis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam cum ita placeat, ne eorum quidem bonorum, quae nos bona vere appellemus, frequentia beatiorem vitam fieri aut magis expetendam aut pluris aestimandam, certe minus ad beatam vitam pertinet multitudo corporis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam cum ita placeat, ne eorum quidem bonorum, quae nos bona vere appellemus, frequentia beatiorem vitam fieri aut magis expetendam aut pluris aestimandam, certe minus ad beatam vitam pertinet multitudo corporis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam cum ita placeat, ne eorum quidem bonorum, quae nos bona vere appellemus, frequentia beatiorem vitam fieri aut magis expetendam aut pluris aestimandam, certe minus ad beatam vitam pertinet multitudo corporis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam cum ita placeat, ne eorum quidem bonorum, quae nos bona vere appellemus, frequentia beatiorem vitam fieri aut magis expetendam aut pluris aestimandam, certe minus ad beatam vitam pertinet multitudo corporis. </p>
              </div>
          </div>
    )
}