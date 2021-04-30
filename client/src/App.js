import React, { useEffect } from "react";
import classes from "./app.module.css";

import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

const App = () => {
  // init dispatch hook
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <header>
        <div className={classes.headItems}>
          <h2>Stories</h2>
          <img src={memories} alt="memories" />
        </div>
      </header>

      {/*  */}
      <section className={classes.appComponents}>
        <article className={classes.postComp}>
          <Posts />
        </article>
        {/*  */}
        <article className={classes.formComp}>
          <Form />
        </article>
      </section>
    </div>
  );
};

export default App;
