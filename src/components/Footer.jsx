export default function Footer() {
    const date = new Date();
    let currentYear = date.getFullYear();
  return (
    <footer className="bg-white">
      <div class="w-full mx-auto p-4 flex justify-center">
        <p className="text-amber-500 font-medium">© {currentYear} Zubair Adham. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
