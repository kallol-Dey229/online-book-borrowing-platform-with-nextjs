const AllBooksLeftSidebar = ({
  books,
  setFilteredBooks,
  activeCategory,
  setActiveCategory
}) => {

  const categories = ["All", ...new Set(books.map(book => book.category))];

  const handleCategory = (category) => {
    setActiveCategory(category); 

    if (category === "All") {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(book => book.category === category);
      setFilteredBooks(filtered);
    }
  };

  return (
    <div>
      <ul className="flex flex-col gap-3 mt-20">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategory(category)}
            className={`cursor-pointer rounded-md font-bold text-center p-2 
              ${activeCategory === category ? "bg-slate-200" : ""}`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBooksLeftSidebar;