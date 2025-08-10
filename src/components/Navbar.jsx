function Navbar() {
  return (
    <div className="py-4 backdrop-blur mt-5 sticky top-0 z-50 w-5/6 mx-auto flex text-white shadow-2xl">
      <div className="basis-1/3">Company Logo</div>
      <ul className="flex basis-2/3 justify-end text-white shadow-2xl gap-8">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="/">Project</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
