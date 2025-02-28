    export default function AboutPage() { 
    return (
    <div className="About">
    <h1>About</h1>
    </div>
    )
    }


export default function About() {
return (
<main className={styles.main}>
<div className="About">
<h1>About</h1>
<p>This is the about page.
Nothing to see, go <Link href="/">home</Link>.</p>
</div>
</main>
)
}
// Check http://localhost:3000/about to see it in action