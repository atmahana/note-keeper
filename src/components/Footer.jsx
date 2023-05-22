export default function Footer() {
    const date = new Date();
    let currentYear = date.getFullYear();
  return (
    <footer className="fixed bottom-0 right-0 left-0">
      <div className="w-full mx-auto p-4 flex justify-center">
        <p className="text-amber-500">© {currentYear} Zubair Adham. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
