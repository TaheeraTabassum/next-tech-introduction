import Link from "next/link";

export default function Navbar() {
  return (
    <div className="">
      <Link href="/"> Home </Link>
      <Link href="/about"> About </Link>
      
      {/* <button type="button" onClick={() => router.push("/about")}>
        About
      </button> */}
      <Link href="/learn"> Learn </Link>
      <Link href="/meals"> Meals</Link>
    </div>
  );
}
