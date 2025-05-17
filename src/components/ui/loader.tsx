/**
 * v0 by Vercel.
 * @see https://v0.dev/t/r842HelLUm8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// components/CustomLoader.tsx

import { useEffect, useState } from "react";

export default function CustomLoader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-10 h-10">
            <div 
            style={
              isMobile ?
              {
              border: "4px solid #3d3d3d"
            } : undefined
          }
            className="absolute inset-0 rounded-full border-4 border-t-transparent border-warning animate-spin"></div>
          </div>
          <p className="text-gray-500 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }
  