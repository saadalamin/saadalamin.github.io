import React from "react";

function Post({ key, post: { title } }) {
  return (
    <div className="post p-4" key={key}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel
      iusto temporibus non, pariatur a officiis quas, repellendus alias quos
      nulla neque voluptates natus dicta expedita eligendi odio, ex nesciunt.
    </div>
  );
}

export default Post;
