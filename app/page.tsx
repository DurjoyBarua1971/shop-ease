import Link from "next/link";
import { auth0 } from "./lib/auth0";
import Image from "next/image";
import Button from "./components/Button";

export default async function Home() {
  const session = await auth0.getSession();
  console.log("Session:", session);

  if (!session) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">
          Welcome to <span className="text-blue-400">ShopEase</span>
        </h1>
        <p className="text-gray-300 max-w-md">
          Sign up or log in to start exploring amazing products and manage your
          cart effortlessly.
        </p>
        <div className="flex gap-4">
          <a href="/auth/login?screen_hint=signup">
            <Button className="px-6 py-2">Sign Up</Button>
          </a>
          <a href="/auth/login">
            <Button className="px-6 py-2" variant="optional">
              Log In
            </Button>
          </a>
        </div>
      </main>
    );
  }

  return (
    <div className="text-center mt-10">
      <div className="mx-auto w-24 h-24 mb-6 relative">
        <Image
          src={session.user.picture!}
          alt={
            session.user.given_name || session.user.nickname || "Unknown User"
          }
          className="rounded-full object-cover border-2 border-gray-300 shadow-sm"
          fill
          sizes="96px"
          priority
        />
      </div>
      <h2 className="text-2xl font-semibold text-white">
        Welcome,{" "}
        {session.user.given_name || session.user.nickname || "Unknown User"}!
      </h2>
      <p className="mt-4 text-white text-base">
        Browse{" "}
        <Link
          href="/products"
          className="text-blue-500 hover:underline font-medium"
        >
          Products
        </Link>{" "}
        or view your{" "}
        <Link
          href="/cart"
          className="text-blue-500 hover:underline font-medium"
        >
          Cart
        </Link>
        .
      </p>
    </div>
  );
}
