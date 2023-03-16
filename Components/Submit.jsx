import React from "react";

const Submit = ({ name }) => {
  return (
    <>
      <h1 className="heading__large mt">
        That's it, {name}!<br />
        We appreciate your time and effort in answering our questions.
        <br />
        Rest assured that we will review your answers thoroughly and notify you
        via email as soon as we can.
        <br />
        Thank you!
      </h1>
    </>
  );
};

export default Submit;
