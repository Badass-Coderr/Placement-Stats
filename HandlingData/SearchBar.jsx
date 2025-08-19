function SearchBar(){
  return <>
   <div className="mb-3">
          {/* Single search input */}
          <input 
            type="text" 
            name="keyword" 
            placeholder="Search by name, roll number, company, branch, or year" 
            value={searchKeyword} 
            onChange={handleChange} 
            className="form-control" 
          />
          <button onClick={handleSearch} className="btn btn-primary mt-2">Search</button>
        </div></>
}