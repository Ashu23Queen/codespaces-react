import "./post.css";

export default function Post(){
    return(
          <div className="post">
            <img className="postImg" src="Octocat.png" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        Music
                    </span>
                    <span className="postCat">
                        Life
                    </span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet                    
                </span>
                <hr/>
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam cum ita placeat, ne eorum quidem bonorum, quae nos bona vere appellemus, frequentia beatiorem vitam fieri aut magis expetendam aut pluris aestimandam, certe minus ad beatam vitam pertinet multitudo corporis.</p>
          </div>
    )
}