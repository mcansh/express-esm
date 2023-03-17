import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "New Remix App",
  };
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link
            target="_blank"
            to="https://remix.run/tutorials/blog"
            rel="noreferrer noopener"
          >
            15m Quickstart Blog Tutorial
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            to="https://remix.run/tutorials/jokes"
            rel="noreferrer noopener"
          >
            Deep Dive Jokes App Tutorial
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            to="https://remix.run/docs"
            rel="noreferrer noopener"
          >
            Remix Docs
          </Link>
        </li>
      </ul>
    </div>
  );
}
