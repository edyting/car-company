
const Search = () => {
  return (
    <div>
      <div className="search_container">
        <div className="search_container_text">
          Search the car you want, your way
        </div>
        <form action="">

          <div className="form_brand">
            <select name="" id="">
              <option value="">-Select Brands-</option>
            </select>
          </div>
            <div className="form_condition">
              <select name="" id="">
                <option value="">-Condition-</option>
              </select>
            </div>

            <div className="form_color">
              <select name="" id="">
                <option value="">-Select Color-</option>
              </select>
            </div>

            <div className="form_year">
              <select name="" id="">
                <option value="">-All Years-</option>
              </select>
            </div>

            <div className="form_location">
              <select name="" id="">
                <option value="">-Select Location-</option>
              </select>
            </div>

            <div className="form_search">
              <button>
                Search
              </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Search
