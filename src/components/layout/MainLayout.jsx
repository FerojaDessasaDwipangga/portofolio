import Sidebar from '../ui/Sidebar';
import Footer from '../ui/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 transition-colors duration-300 relative">
      {/* Global Background Grid */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Sidebar />
        <main className="flex-1 lg:ml-20 transition-all duration-500 mt-16 lg:mt-0">
          {children}
        </main>
        <div className="lg:ml-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
