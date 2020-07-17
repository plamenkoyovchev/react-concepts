import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const DataFetchingWithUseState = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {error && <div>error</div>}
      <div>{post.title}</div>
    </>
  );
};

export default DataFetchingWithUseState;
