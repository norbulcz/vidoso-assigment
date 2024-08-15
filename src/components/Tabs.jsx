import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyledNav = styled(NavLink)`
    width: 100%;
    text-align: center;
    min-width: 100px;
    margin: 0 auto;
    color: #ffffff;
    padding: 10px;
    background-color: #6EA0DC;
    text-decoration: none;

    &.active {
        background-color: #3878D2;
    }

    &:hover {
        color: #333;
    }
`;

const Tabs = () => {

    return (
        <NavContainer>
            <StyledNav to="/users">Users</StyledNav>
            <StyledNav to="/posts">Posts</StyledNav>
        </NavContainer>
    )
}

export default Tabs;