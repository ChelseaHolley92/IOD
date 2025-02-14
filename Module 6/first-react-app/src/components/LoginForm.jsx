function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    return (
    <div className="LoginForm componentBox">
    <div className="formRow">
    <label>Email Address:
    {
    <input type="email" value={userEmail} name="userEmail"
    onChange={(e) => setUserEmail(e.target.value)} />
    </label>
    </div>
    <div className="formRow">
    <label>Password:
    <input type="password" value={userPassword} name="password"
    onChange={(e) => setUserPassword(e.target.value)} />
    </label>
    </div>
    </div>
    )
    }

const [submitResult, setSubmitResult] = useState('');

const handleSubmit = (e) => {
e.preventDefault(); // prevent page reloading on form submit

// add some password validation
if (userPassword.length < 5) {
setSubmitResult('Password must be at least 5 characters long');
} else if (userPassword === userEmail) {
setSubmitResult('Password must not match email address');
} else {
setSubmitResult('Successful login.');
}
}

return (
<div className="LoginForm componentBox">
<form onSubmit={handleSubmit}>
{/* 
<button>Log In</button>
<p>{submitResult}</p>
</form>
</div>

function AddMovieForm({onAddMovie}) {
const [title, setTitle] = useState('')
const [year, setYear] = useState('')
// ++ add support for the synopsis field as well, here and below
const handleSubmit = (e) => {
e.preventDefault();
onAddMovie({title, year})
}
return (
<div className="AddMovieForm componentBox">
<form onSubmit={handleSubmit}>
<label>Movie Title:
<input name="title" value={title}
onChange={(e) => setTitle(e.target.value)} />
</label>
<label>Year Released:
<input name="year" type="number" value={year}
onChange={(e) => setYear(e.target.value)} />
</label>
<button>Add Movie</button>
</form>
</div>
)


    export default LoginForm