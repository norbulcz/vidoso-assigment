import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ListElement from "../components/ListElement";
import Pagination from "../components/Pagination";
import { SearchContext } from "../components/SearchContext";

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
`;

const ListPage = ({ data, itemsPerPage = 5 }) => {
    const { searchTerm } = useContext(SearchContext);
    const [filteredItems, setFilteredItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setFilteredItems(
            data.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setCurrentPage(1);
    }, [searchTerm, data]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <ListContainer>
                {currentItems.map((item, index) => <ListElement key={index} entry={item} />)}
            </ListContainer>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredItems.length}
                paginate={handlePageChange}
                currentPage={currentPage}
            />
        </>
    );
};

ListPage.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string
        })
    ).isRequired,
    itemsPerPage: PropTypes.number
};

export default ListPage;
