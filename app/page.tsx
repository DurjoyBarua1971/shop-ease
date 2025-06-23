import Link from "next/link";
import { auth0 } from "./lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  console.log("Session:", session);

  if (!session) {
    return (
      <main>
        <a href="/auth/login?screen_hint=signup">
          <button>Sign up</button>
        </a>
        <a href="/auth/login">
          <button>Log in</button>
        </a>
      </main>
    );
  }

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
