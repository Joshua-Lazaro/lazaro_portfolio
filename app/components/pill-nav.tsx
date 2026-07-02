
export default function PillNav() {
 
  const items = [
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Recognition", href: "#recognition" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="flex justify-center items-center bg-[#111] rounded-full px-6 py-2 border border-gray-700">
      <ul className="flex space-x-8">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-gray-300 hover:text-blue-500 font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}