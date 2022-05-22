import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

const Nav = ({ setSearchValue , searchValue , onFocus }) => {


    const onSearchValueChange = ({ target : { value } }) => {
        setSearchValue(value);
    }

    return (
        <div className="nav">
            <SearchIcon />
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