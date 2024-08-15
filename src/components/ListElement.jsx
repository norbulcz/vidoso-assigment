import PropTypes from "prop-types";
import styled from "styled-components";

const ListElementContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: #333;
    min-width: 300px;
    height: 40px;
    border-bottom: 1px solid #ccc;
    gap: 10px;
    align-items: inherit;
    &:last-child {
       border-bottom: none;
    }
    &:first-child {
        margin-top: 10px;
    }
`;

const PictureContainer = styled.div`
    border-radius: 20px;
    width: 25px;

    height: 25px;
    background-color: #DCDCDC;
`;

const ListElement = (props) => {
    const element = props.entry;
    return (
        <ListElementContainer>
            <PictureContainer>
                {element.image && (<img src={element.image} />)}
            </PictureContainer>
            <span>{element.name}</span>
        </ListElementContainer>
    )
}

ListElement.propTypes = {
    entry: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string
    }).isRequired
};

export default ListElement;