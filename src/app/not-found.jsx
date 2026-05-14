import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 text-gray-700 bg-gray-100">
      <div className="max-w-xl text-center">
        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold text-blue-700 md:text-8xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Page Not Found</h2>

        {/* Description */}
        <p className="mt-4 text-gray-400">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            Go Home
          </Link>

          <Link
            href="/courses"
            className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-gray-400 transition  hover:text-blue-700"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
