import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="text-3xl font-bold">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
