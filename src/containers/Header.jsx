import { Link } from "react-router"

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full py-8 flex flex-row justify-center bg-blue-300">
            <nav className="flex flex-row gap-4">
                <Link to={"/posts"} className="underline text-blue-600">Posts</Link>
                <Link to={"/posts/add"} className="underline text-blue-600">Add New</Link>
            </nav>
        </header>
    )
}

export default Header;