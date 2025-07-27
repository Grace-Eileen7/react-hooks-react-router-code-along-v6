import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <h1>Oops! Page not found.</h1>
      <p>{error.statusText || error.message}</p>
    </main>
  );
}

export default ErrorPage;
