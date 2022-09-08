import React from "react";
import { Form } from "../Form/Form";
import { List } from "../List/List";

const Home = () => {
  return (
    <div className="wrapper">
      <Form />
      <h1>Ihorovich todoshka:</h1>
      <List />
    </div>
  );
};

export default Home;
