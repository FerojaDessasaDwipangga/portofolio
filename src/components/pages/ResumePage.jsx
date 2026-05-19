export default function ResumePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4 text-accent">Resume / CV</h1>
        <div className="flex gap-4 justify-center">
          <a href="/resume.pdf" download className="btn btn-primary">
            📥 Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            👁️ View PDF
          </a>
        </div>
      </section>

      {/* PDF Viewer Placeholder */}
      <section className="bg-base-200 border border-base-300 rounded-lg p-8 text-center min-h-96">
        <p className="text-base-content/60 mb-4">PDF Viewer akan ditampilkan di sini</p>
        <p className="text-sm text-base-content0">
          Silahkan download atau buka PDF di tab baru untuk melihat resume lengkap
        </p>
      </section>
    </div>
  );
}
