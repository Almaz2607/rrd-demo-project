import React, { useEffect } from "react";
// Librares
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
// Components
import BackgroundGradiend from "../components/BackgroundGradient";
import ScreenWidthWrapper from "../components/ScreenWidthWrapper";
// Pages
// import PostPage from "../pages/Posts/PostPage";
// import PostsListPage from "../pages/Posts/PostsListPage";
//Store
import { getPosts } from "../store/postsSlice";

const PostsLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPostData = () => {
      dispatch(getPosts());
    };
    loadPostData();
  }, [dispatch]);

  //   let { path } = useRouteMatch();
  return (
    <>
      <BackgroundGradiend />
      <ScreenWidthWrapper>
        <Outlet />
      </ScreenWidthWrapper>
    </>
  );
};

export default PostsLayout;
