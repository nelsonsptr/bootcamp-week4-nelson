function Header() {
    return (
        <div className="flex items-center justify-between bg-slate-400">
            <h3 className="font-bold text-lg">Judul Website</h3>
            <nav className="text-slate-800 font-bold text-lg flex gap-10">
                <ul className="flex gap-5">
                    <a href="#" className="text-slate-600 hover:text-slate-900">Beranda</a>
                    <a href="#" className="text-slate-600 hover:text-slate-900">Konten Utama</a>
                    <a href="#" className="text-slate-600 hover:text-slate-900">Tentang Kami</a>
                </ul>
            </nav>
        </div>
    )
}
export default Header;