import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  post: {},
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_FAILED":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const DataFetchingWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getPost();
  }, []);

  const onRefreshHandler = () => getPost();

  const getPost = () => {
    dispatch({ type: "FETCH_START" });
    setTimeout(function () {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
          dispatch({ type: "FETCH_SUCCESS", payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: "FETCH_FAILED", error: error });
        });
    }, 1000);
  };

  const { post, error, loading } = state;

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {error && <div>error</div>}
      <div>{post.title}</div>
      <div>
        <button onClick={onRefreshHandler}>REFRESH</button>
      </div>
    </>
  );
};

export default DataFetchingWithUseReducer;
