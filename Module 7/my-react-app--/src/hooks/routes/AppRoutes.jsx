function AppRoutes(props) {

    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />
    {/* nested routes, matches on /dash/tasks etc */}
    <Route path="dash" element={<DashboardPage {...props} />}>
    <Route path="messages" element={<DashboardMessages />} />
    <Route path="tasks" element={<DashboardTasks />} />
    </Route>
    
    <Route path='/about' element={<AboutPage {...props} />} />
    
    {/* special route to handle if none of the above match */}
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    )
    }
    
<Route path='/posts' element={<PostsPage {...props} />} >
<Route index element={<PostList />} />
{/* dynamic param taken from route, stored in variable called id */}
<Route path=":id" element={<Post />} />
</Route>
// add to NavBar.jsx so we can access our new page
<li><NavLink to="/posts">Posts</NavLink></li>
// add to PostsPage.jsx
export function Post() {
const { id } = useParams(); // custom hook to access dynamic params
const post =
useData('https://jsonplaceholder.typicode.com/posts/'+id);
return (
<div className="Post">
{post ?
<><h3>Post #{post.id}: {post.title}</h3>
<p>{post.body}</p></>
: "Loading ..." }
</div>
)
}
    export default AppRoutes;