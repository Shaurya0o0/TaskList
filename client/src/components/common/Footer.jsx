export default function Footer() {
  return (
    <footer className="border-t bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TaskList. All rights reserved.
      </div>
    </footer>
  );
}
