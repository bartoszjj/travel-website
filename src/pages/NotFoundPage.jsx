import { Link } from "react-router-dom";
import { Frown } from "lucide-react";

function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p>404 Error - Page not found. Make sure you entered the correct URL</p>
        <Frown size={40} color={"red"} strokeWidth={3}></Frown>
        <Link to="/">Go back home</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
