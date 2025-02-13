"use client"
import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { Settings, Home, Search, Bell } from "lucide-react";

const FloatingToolbar = () => {
  const [orientation, setOrientation] = useState("horizontal");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const toolbarRef = useRef(null);
  const toolbarHeight = 56; // 40px height + 16px padding

  // Update dimensions when orientation changes
  useEffect(() => {
    if (toolbarRef.current) {
      setDimensions({
        width: toolbarRef.current.offsetWidth,
        height: toolbarRef.current.offsetHeight
      });
    }
  }, [orientation]);

  const handleDrag = (e, data) => {
    const { x, y } = data;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const edgeThreshold = 50;
    
    const isNearLeft = x < edgeThreshold;
    const isNearRight = x > screenWidth - dimensions.width - edgeThreshold;
    const isNearTop = y < edgeThreshold;
    const isNearBottom = y > screenHeight - dimensions.height - edgeThreshold;

    if (isNearLeft || isNearRight) {
      setOrientation('vertical');
    } else if (isNearTop || isNearBottom) {
      setOrientation('horizontal');
    }
  };

  const ToolbarIcon = ({ icon: Icon }) => (
    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors">
      <Icon size={24} className="text-gray-600" />
    </div>
  );

  return (
    <div className="w-screen h-screen">
      <Draggable 
        onDrag={handleDrag} 
        bounds="parent"
        grid={[5, 5]} // Adjust grid for smoother drag
      >
        <div
          ref={toolbarRef}
          className={`
            fixed z-50 bg-gray-100 border border-gray-300 rounded-xl shadow-lg
            ${orientation === 'horizontal' 
              ? 'flex flex-row px-4 py-2 space-x-3' 
              : 'flex flex-col px-2 py-4 space-y-3'
            }
            transition-all duration-300 ease-in-out
            cursor-grab active:cursor-grabbing
          `}
        >
          <ToolbarIcon icon={Home} />
          <ToolbarIcon icon={Search} />
          <ToolbarIcon icon={Bell} />
          <ToolbarIcon icon={Settings} />
        </div>
      </Draggable>
    </div>
  );
};

export default FloatingToolbar;
