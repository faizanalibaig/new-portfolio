'use client'
import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  // Return null if isLoading is false, or you can return some fallback UI
  return null;
}
 
export default Loading;
