import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as BackIcon } from "../assets/icons/arrow-small-left.svg";

const Nav = ({ setSearchValue , searchValue , onFocus , loading , isInDetailsMode , goBackToDirectoryHandler }) => {


    const onSearchValueChange = ({ target : { value } }) => {
        setSearchValue(value);
    }

    return (
        <div className="nav">
            <SearchIcon className={`nav__search ${isInDetailsMode ? "nav__search--hide" : ""} ${loading ? "nav__search--loading" : ""}`} />
            <div onClick={goBackToDirectoryHandler} className={`nav__back ${isInDetailsMode ? "nav__back--visible" : ""}`} >
                <BackIcon />
            </div>
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