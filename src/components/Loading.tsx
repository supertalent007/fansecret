"use client";

import React, { useEffect, useState } from "react";

const Loading: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     //Hide the loading screen after 2 seconds
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 2500);

//     return () => clearTimeout(timer); // Cleanup timer on component unmount
//   }, []);

  if (!isVisible) return null;
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50" style={{ backgroundImage: "url('./loading.png')", backgroundSize: "contain", }}>
            <div className="w-24 h-24 border-dashed border-gray-200 rounded-full animate-spin" style={{ borderWidth: "14px" ,borderColor: "#f8d3c3", marginTop: "300px"}}></div>
        </div>
    );
};

export default Loading;