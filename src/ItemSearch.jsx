/* eslint-disable react/prop-types */
const Search = ({ search, onSearch, title, pHold }) => (
    <div className="container text-center">
      <h2>{title}</h2>
      <input type="text" onChange={onSearch} value={search} placeholder={pHold} />
    </div>
  );

  export default Search