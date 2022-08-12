import React from 'react';

const Article = ({ description, marque, src, title, price }) => {
  console.log('article', description);
  return (
    <div className="flex-1 justify-between items-center  m-1 h-full w-full">
      {/* display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0.3rem;
  height: 40rem;
  min-width: 17.5rem;
  /* max-width: 40rem;s 
  background-color: #f5fbfd;
  position: relative;  */}

      <img className="w-full h-full" src={src} alt="article" />
      {/* <div className="flex justify-evenly items-center my-4   "> */}
      <div className="grid grid-cols-4 divide-x  ">
        {/* opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.5s ease;
  z-index: 3; */}
        <span className="p-2">{title}</span>
        <p className="p-2">{marque} </p>
        <span className="p-2">{description}</span>
        <span className=" -200 ml-10 text-black p-2">{price} $</span>
      </div>
    </div>
  );
};

export default Article;
