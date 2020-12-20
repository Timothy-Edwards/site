import React, { useState } from "react";
import PostCard from "../components/PostCard/PostCard";
import PageHeader from "../components/HeaderFooter/HeaderFooter";

export default function Home() {
  let [emoji, setEmoji] = useState("🤠");

  const changeEmoji = () => {
    const newEmoji = emoji === "🤠" ? "👽" : "🤠";
    setEmoji(newEmoji);
  };

  return (
    <div>
      <PageHeader emoji={emoji} changeEmoji={changeEmoji}>
        <h2>Posts</h2>
          <div className="grid">
            <PostCard header={"howdy"} tagline={"my tag line :)"} />
            <PostCard header={"hi again"} tagline={"my tag line against"} />
          </div>
      </PageHeader>

      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

     
    </div>
  );
}
