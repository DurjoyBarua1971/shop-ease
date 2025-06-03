import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold">Welcome to SnapEase!</h2>
      <p className="mt-4 font-semibold">
        Browse{" "}
        <Link href="/products" className="text-blue-600">
          Products
        </Link>{" "}
        or view your{" "}
        <Link href="/cart" className="text-blue-600">
          Cart
        </Link>
        .
      </p>
    </div>
  );
}
