import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const DataFetchingWithUseState = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setLoading(false);
      return response;
    };
    const response = fetchData();
    setPost(response.data);
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div>{post.title}</div>
    </>
  );
};

export default DataFetchingWithUseState;
