import {
  Links,
  Meta,
  Outlet,
  Scripts,
  MetaFunction,
  isRouteErrorResponse,
  useRouteError,
  ErrorResponse,
  Link,
} from "@remix-run/react";

export default function about() {
  return (
    <>
      <h1>What is UMAXICA</h1>
      <p>
        <a href="https://github.com/seahal/umaxica">See this!</a>
      </p>
    </>
  );
}
