import { SearchIcon } from "./Icons/Icons";

function Search({handleSearchNote}) {
  return (
    <div className="relative w-4/5 lg:w-1/2 xl:w-1/3">
      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
      <SearchIcon/>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="p-5 pl-14 rounded-xl shadow-md input-bordered focus:input-primary w-full"
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
}

export default Search;
