export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content border-t border-base-300">
      <aside>
        <p className="text-sm opacity-60 font-medium">
          © {currentYear} Feroja Dessasa Dwipangga. Semua hak dilindungi.
        </p>
      </aside>
    </footer>
  );
}

