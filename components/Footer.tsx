export default function Footer() {
  return (
    <footer className="bg-[#151822] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="bg-[#F3F6FB] text-black inline-block px-3 py-2 rounded">LOGO</div>
        </div>
        <div>
          <h4 className="font-semibold">Lorem Ipsum</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Lorem Ipsum</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Lorem Ipsum</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}