import React from "react";
import EditBlog from "@/component/CreateBlog";

const edit = ({title, content}) => {
  return (
    <div>
      <EditBlog title={title} content={content}/>
    </div>
  );
};

export default edit;
