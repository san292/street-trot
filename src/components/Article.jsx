import React from 'react';

const Article = ({ description, marque, src, title, price }) => {
  console.log('article', description);
  return (
    <div className=" w-[200px] h-[200px] ">
      <img
        className="w-[200px] h-[150px] object-cover"
        src={src}
        alt="article"
      />
      {/* <div className="flex justify-evenly items-center my-4   "> */}
      <div className=" flex-col m-1 py-1">
        {/* <h3 className="p-1">{title}</h3> */}
        <p className="p-1">{marque} </p>
        <p className="p-1">{description}</p>
        <span className=" text-black p-1">{price} $</span>
      </div>
    </div>
  );
};

export default Article;
