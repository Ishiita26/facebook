import React from "react";
import { Posts } from "../../data";
import Post from "../post/Post";
import Share from "../share/Share";
import Stories from "../stories/Stories";
import HomeCards from "../HomeCards/HomeCards";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Stories />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
        <HomeCards />
      </div>
    </div>
  );
};

export default Feed;
