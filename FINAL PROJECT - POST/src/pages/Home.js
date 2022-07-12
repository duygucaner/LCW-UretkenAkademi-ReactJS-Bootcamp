import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../delete.png";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  let load = true
  
  useEffect(() => {  

    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      console.log(data)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    if (load==true) {setTimeout(() => { getPosts() }, 1000);}
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
          <div className="userheader">
                 <img className="userprofile" src={post.author.photo} alt="Delete Post"/>
                 <h3 className="userauthor">@{post.author.name}</h3>
              </div>
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {<img className="deletebtn" src={require('../delete.png')} alt="Delete Post"/>}
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
          </div>
        );
      })}
    </div>
  );
  
}

export default Home