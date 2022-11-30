import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ ...props }) => {
  return (
    <Helmet>
      <title>Belkins Store Inventory</title>
    </Helmet>
  );
};
export default Head;
