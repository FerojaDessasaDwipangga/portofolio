import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 text-center">
      <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</p>
      <p className="text-base-content/60 mb-8">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Link to="/" className="btn btn-primary">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
