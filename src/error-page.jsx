import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex justify-center items-center h-screen bg-red-200 font-bold text-3xl "
    >
      <h1 className="text-4xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="font-semibold text-red-500">
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
