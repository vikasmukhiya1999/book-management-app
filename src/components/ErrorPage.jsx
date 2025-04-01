import { useRouteError } from "react-router-dom";
import "./style.css";

function ErrorPage() {
  const err = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops! Page not found</h1>
      <h2>
        {err.status} {err.statusText}
      </h2>
      <h3>
        {err.data}
      </h3>
    </div>
  );
}

export default ErrorPage;
