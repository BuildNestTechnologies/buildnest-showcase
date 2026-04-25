import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="font-display text-8xl font-bold text-gray-200">404</h1>
      <h2 className="mt-4 font-display text-3xl font-bold text-[#111214]">Page not found</h2>
      <p className="mt-2 text-lg text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:scale-105">
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
