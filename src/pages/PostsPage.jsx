import ListPage from "../components/ListPage";
import postList from "../data/posts.json";

const PostsPage = () => {

    //imagine we take it from our global state
    const posts = postList;

    return (
        <ListPage data={posts} />
    );
};

export default PostsPage;
