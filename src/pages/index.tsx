import { TipTapEditor } from "@/components/custom/TipTapEditor";
import { Link } from "@/router";

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* header */}
      <header className="w-full max-w-7xl mx-auto px-4 border-b border-gray-300 py-4">
        <Link to="/" className="font-medium">
          TipTap Image Uploader Demo
        </Link>
      </header>

      {/* main content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 ">
        <TipTapEditor className="mt-4 sm:mt-8 max-w-2xl mx-auto" />
      </main>

      {/* footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 flex items-start py-4 text-gray-500 text-sm">
        <div className="flex-1"></div>
        <div className="flex-1 text-center">
          <p>&copy; The Adpharm</p>
        </div>
        <div className="flex-1"></div>
      </footer>
    </div>
  );
}
