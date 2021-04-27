import React from "react";
import classes from "./app.module.css";

import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.headItems}>
          <h2>Memories</h2>
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
