function Header() {
    return (
        <header className="header">
            <h3 className="header-title">Judul Website</h3>
            <nav>
                <ul className="nav-list">
                    <li><a href="#" className="nav-link">Beranda</a></li>
                    <li><a href="#" className="nav-link">Konten Utama</a></li>
                    <li><a href="#" className="nav-link">Tentang Kami</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;