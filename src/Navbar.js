function MakeNav(){
    return(
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <a class="navbar-brand" href="#">Home</a>
            <a class="navbar-brand" href="#">About</a>
            <a class="navbar-brand" href="#">Contact</a>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default MakeNav;