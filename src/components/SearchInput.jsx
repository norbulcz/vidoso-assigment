import { useContext, useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import styled from "styled-components";
import { SearchContext } from "./SearchContext";
import { MdClear } from "react-icons/md";

const InputContainer = styled.div`
    position: relative;
    min-width: 300px;
    max-width: 600px;
    width: 90%;
    height: 26px;
    border-radius: 20px;
    background-color: #ffffff;
    border: 0px;
    margin: 5px auto;
    padding: 0 15px;
    box-sizing: border-box;

`;

const StyledSearchInput = styled.input`
    display: flex;
    height: 26px;
    border-radius: 20px;
    background-color: #ffffff;
    border: 0px;
    padding: 0px 30px 0px 30px;
    box-sizing: border-box;
    width: 100%; // ce plm
    max-width: 570px;

    &:focus {
        border-color: #ffffff; 
        outline: none; 
    }

`;

const StyledIcon = styled(FaSearch)`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
    pointer-events: none;
`;

const ClearIcon = styled(MdClear)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
    cursor: pointer;
    display: ${({ show }) => (show ? 'block' : 'none')};
`;

const SearchInput = () => {

    const { setSearchTerm } = useContext(SearchContext)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const storedSearchQuery = localStorage.getItem('searchQuery');
        if (storedSearchQuery) {
            setSearch(storedSearchQuery);
            setSearchTerm(storedSearchQuery);
        }
    }, [setSearchTerm]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setSearchTerm(e.target.value);
        localStorage.setItem('searchQuery', e.target.value);
    }

    const clearSearch = () => {
        setSearch("");
        setSearchTerm("");
        localStorage.removeItem('searchQuery');
    };

    return (
        <InputContainer>
            <StyledIcon />
            <StyledSearchInput
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
            />
            <ClearIcon show={search.length > 0} onClick={clearSearch} />
        </InputContainer>
    )
}

export default SearchInput;