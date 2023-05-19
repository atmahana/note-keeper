export default function Footer() {
    const date = new Date();
    let currentYear = date.getFullYear();
  return (
    <footer className="absolute bottom-0 right-0 left-0">
      <div class="w-full mx-auto p-4 flex justify-center">
        <p className="text-amber-200">© {currentYear} Zubair Adham. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
