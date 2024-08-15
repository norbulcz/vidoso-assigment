import PropTypes from "prop-types";
import styled from "styled-components";

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const StyledPageNumberButton = styled.button`
    background-color: #4C8CE1; 
    color: #fff;
    border: none;
    padding: 10px 15px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &.active {
        background-color: #5cb85c;
    }
`;

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationContainer>
            {pageNumbers.map(number => (
                <StyledPageNumberButton
                    key={number}
                    onClick={() => paginate(number)}
                    className={number === currentPage ? 'active' : ''}
                >
                    {number}
                </StyledPageNumberButton>
            ))}
        </PaginationContainer>
    );
}

Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;