import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <div className="relative">
      <Link
        to={`/`}
        className="font-bold block py-3 text-sky-500"
        title="Rexample"
      >
        REXAMPLE
      </Link>
    </div>
  );
}
