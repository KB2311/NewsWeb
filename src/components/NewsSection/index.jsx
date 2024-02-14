import React from "react";

const NewsSection = ({ mydata }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 px-3 pt-14 sm:grid-cols-2 lg:grid-cols-3">
      {mydata.map((x) => (
        <div className="w-full overflow-hidden rounded-xl border-2 border-black">
          <div className="img_news">
            <img className="" src={x.imageUrl} alt="" />
          </div>
          <div className="bg-yellow-100 p-3">
            <h3 className="pb-3 font-bold text-red-700">{x.title}</h3>
            <div className="">
              <p className="font-bold">
                <span className="">By :</span> {x.author}
              </p>
              <p>
                {x.time} on {x.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
