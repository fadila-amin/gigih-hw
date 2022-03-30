import React from "react";

const Search = ({ search }) => {
  const [keyword, setKeyword] = React.useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
    // handleClick();
  };
  const handleClick = () => {
    search(keyword);
  };
  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;
