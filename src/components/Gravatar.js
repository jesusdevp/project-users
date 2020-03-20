import React from "react";
import md5 from "md5";

function Gravatar(props) {
  const name = props.name;
  const hash = md5(name);

  return (
    <img
      className={props.className}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
