import ListPage from "../components/ListPage";
import userList from "../data/users.json";

const UsersPage = () => {

    //imagine we take it from our global state
    const users = userList;

    return (
        <ListPage data={users} />
    );
};

export default UsersPage;
