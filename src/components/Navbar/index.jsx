import React from "react";
import NavCategories from "../NavCategories";

const categories = [
  {
    name: "All news",
    id: 1,
    apiName: "all",
  },
  {
    name: "Science",
    id: 2,
    apiName: "science",
  },
  {
    name: "Entertainment",
    id: 3,
    apiName: "entertainment",
  },
  {
    name: "Sports",
    id: 4,
    apiName: "sports",
  },
  {
    name: "Politics",
    id: 5,
    apiName: "politics",
  },
  {
    name: "Business",
    id: 6,
    apiName: "business",
  },
  {
    name: "Technology",
    id: 7,
    apiName: "technology",
  },
  {
    name: "World",
    id: 9,
    apiName: "world",
  },
  {
    name: "Education",
    id: 11,
    apiName: "education",
  },
  {
    name: "Travel",
    id: 12,
    apiName: "travel",
  },
];

const Navbar = ({ selectedCategory, setSelectedCategory, setMyData }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setMyData([]);
  };
  return (
    <header className="flex min-h-fit w-full flex-col">
      <div className="flex w-full justify-center px-2">
        <div className="text-5xl ">Navbar</div>
        {/* <div className="pt-5 md:hidden">
          <IoMenuSharp size={30} />
        </div> */}
      </div>
      <nav className="mx-auto flex pt-5 lg:px-10">
        <ul className="justify-content-between flex flex-wrap justify-center gap-3 md:gap-5">
          {categories.map((x) => (
            <NavCategories
              selectedCategory={selectedCategory}
              category={x}
              key={x.id}
              onClick={handleCategoryClick}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
