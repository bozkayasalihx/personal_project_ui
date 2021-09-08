import { useQuery } from "urql";

interface ListPostsProps {}

const GET_POSTS = `
query listPosts {
  listPosts {
    id, 
    title, 
    body
  }
}
`;
const ListPosts = ({}) => {
    const [{ data }, reexecuteQuery] = useQuery({
        query: GET_POSTS,
    });

    console.log("data ", data);

    return <div>todo</div>;
};

export default ListPosts;
