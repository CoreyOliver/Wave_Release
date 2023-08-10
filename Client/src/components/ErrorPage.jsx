import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex items-center justify-around flex-col mt-64">
      <h1 className="p-4">Oops!</h1>
      <p className="p-4">Sorry, an unexpected error has occurred.</p>
      <p className="p-4 hidden md:inline">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;