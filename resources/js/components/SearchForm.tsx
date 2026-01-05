const SearchForm = () => {
    return (
        <div className="flex w-full flex-col gap-4 border-1 p-4">
            <div>What are you searching for?</div>
            <div className="flex gap-2">
                <input type="radio" name="people" /> People
                <input type="radio" name="movies" /> Movies
            </div>
            <input
                className="border-1 border-pink-100 drop-shadow-md drop-shadow-amber-400"
                name="search-query"
                type="text"
                placeholder="Type your query here..."
            />
            <button className="w-full border-1 border-green-600 bg-green-400 drop-shadow-md drop-shadow-amber-400">Search</button>
        </div>
    );
};

export default SearchForm;
