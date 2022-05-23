import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

const Nav = ({ setSearchValue , searchValue , onFocus , loading }) => {


    const onSearchValueChange = ({ target : { value } }) => {
        setSearchValue(value);
    }

    return (
        <div className="nav">
            <SearchIcon className={`nav__search ${loading ? "nav__search--loading" : ""}`} />
            <input
                onFocus={() => onFocus(true)}
                onChange={onSearchValueChange}
                value={searchValue}
                placeholder="Search for some place to find best hotel"
            />
        </div>
    )
}


export default Nav;