const PostsList = ({ posts }) => (
	<ul>{posts.map(p => <li>{p.title}</li>)}</ul>
)

const PostsListWithData = lifecycle({
	componentDidMount() {
		fetchPosts().then(posts => {
			this.setState({ posts });
		})
	}
})(PostsList);