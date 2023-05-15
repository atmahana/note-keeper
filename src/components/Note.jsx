export default function Note() {
  // h1 title p content
  return (
    <div className="bg-amber-100 hover:bg-amber-300 hover:drop-shadow-sm min-w-0 max-w-xs drop-shadow-md rounded-lg p-5">
      <h1 className="font-bold">Note title</h1>
      <p>Note Content</p>
    </div>
  );
}
