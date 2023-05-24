export default function Footer() {
    const date = new Date();
    let currentYear = date.getFullYear();
  return (
    // fixed bottom-0 right-0 left-0 : footer class
    <footer className="fixed bottom-0 footer footer-center p-4 bg-base-300 text-base-content bg-transparent">
      <div>
        <p className="text-primary">© {currentYear} Zubair Adham. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
