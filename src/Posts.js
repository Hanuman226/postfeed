import axios from "axios";
import { useEffect, useState } from "react";
import {Container, ListGroup } from "react-bootstrap";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Posts() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    fetchMoreData();
    window.scrollTo(0,50)
  },[]);

  const fetchMoreData =() => {
   setSkip((prev) => prev + 10);
    if (data.length >= 60) {
      setHasMore(false);
      return;
    }
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?page=1`)
      .then((res) => {
        setData(res.data.slice(0, skip));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container className=" my-2">
      <h3 className="text-center">Posts List View</h3>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h3 className="text-center">Loading...</h3> }
        endMessage={
          <p className="text-center">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
         <ListGroup>
        {data.map((item, index) => (
          <Post
            key={index}
            id={item.id}
            title={item.title.slice(0, 20)}
            body={item.body.slice(0, 100)}
          />
        ))}
           </ListGroup>
      </InfiniteScroll>
    </Container>
  );
}
