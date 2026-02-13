function Header() {
  return(
    <header className="text-black px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl">Auto Data</h1>
        <nav className="flex items-center gap-2">
            <a className="transform transition-all duration-500 hover:scale-108" href="#">Home</a>
            <a className="transform transition-all duration-500 hover:scale-108" href="#">Cars</a>
            <a className="transform transition-all duration-500 hover:scale-108" href="#">About</a>
            <a className="transform transition-all duration-500 hover:scale-108" href="#">Contact</a>
        </nav>
    </header>
  );
}

export default Header
