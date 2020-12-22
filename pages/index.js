import PostCard from "../components/PostCard/PostCard";
import PageHeaderFooter from "../components/HeaderFooter/HeaderFooter";

export default function Home() {
  return (
    <div>
      <PageHeaderFooter>
        <h2>Posts</h2>
          <div className="grid">
            <PostCard header={"This is a more realistic title length"} tagline={`This is a really big tag line, it has lots of text in it so much text that it is going to overflow. What are we going to do about that? I am not entirely sure yet - but we will find out`} />
            <PostCard header={"Another day - another title"} tagline={'This is a more realistic title length no overflow but it does go to two lines'} />
            <PostCard header={"This is a more realistic title length"} tagline={`This is a really big tag line, it has lots of text in it so much text that it is going to overflow. What are we going to do about that? I am not entirely sure yet - but we will find out`} />
            <PostCard header={"Another day - another title"} tagline={'This is a more realistic title length no overflow but it does go to two lines'} />
            <PostCard header={"This is a more realistic title length"} tagline={`This is a really big tag line, it has lots of text in it so much text that it is going to overflow. What are we going to do about that? I am not entirely sure yet - but we will find out`} />
            <PostCard header={"Another day - another title"} tagline={'This is a more realistic title length no overflow but it does go to two lines'} />
            <PostCard header={"This is a more realistic title length"} tagline={`This is a really big tag line, it has lots of text in it so much text that it is going to overflow. What are we going to do about that? I am not entirely sure yet - but we will find out`} />
            <PostCard header={"Another day - another title"} tagline={'This is a more realistic title length no overflow but it does go to two lines'} />
            <PostCard header={"This is a more realistic title length"} tagline={`This is a really big tag line, it has lots of text in it so much text that it is going to overflow. What are we going to do about that? I am not entirely sure yet - but we will find out`} />
            <PostCard header={"Another day - another title"} tagline={'This is a more realistic title length no overflow but it does go to two lines'} />
            <PostCard header={"This is a more realistic title length"} tagline={`This is a really big tag line, it has lots of text in it so much text that it is going to overflow. What are we going to do about that? I am not entirely sure yet - but we will find out`} />
            <PostCard header={"Another day - another title"} tagline={'This is a more realistic title length no overflow but it does go to two lines'} />
            <PostCard header={"This is a more realistic title length"} tagline={`This is a really big tag line, it has lots of text in it so much text that it is going to overflow. What are we going to do about that? I am not entirely sure yet - but we will find out`} />
            <PostCard header={"Another day - another title"} tagline={'This is a more realistic title length no overflow but it does go to two lines'} />
            <PostCard header={"This is a more realistic title length"} tagline={`This is a really big tag line, it has lots of text in it so much text that it is going to overflow. What are we going to do about that? I am not entirely sure yet - but we will find out`} />
            <PostCard header={"Another day - another title"} tagline={'This is a more realistic title length no overflow but it does go to two lines'} />
            <PostCard header={"This is a more realistic title length"} tagline={`This is a really big tag line, it has lots of text in it so much text that it is going to overflow. What are we going to do about that? I am not entirely sure yet - but we will find out`} />
            <PostCard header={"Another day - another title"} tagline={'This is a more realistic title length no overflow but it does go to two lines'} />
          </div>
      </PageHeaderFooter>

      <style jsx>{`
        h2 {
          font-size: 2.5rem;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>

     
    </div>
  );
}
