'use client'
import React, { useState, useEffect } from 'react';
import Header from '@/components/maincomponents/Header';
import Main from '@/components/maincomponents/Main';
import Footer from '@/components/maincomponents/Footer';
import { Progress } from "@/components/ui/progress";

function Home() {
  const [loading, setLoading] = useState(true); 
  const loadingNumber = [33, 55, 88, 100];
  const [loadingValue, setLoadingValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const simulateProgress = async () => {
          for (const value of loadingNumber) {
            setLoadingValue(value);
            await new Promise((resolve) => setTimeout(resolve, 600));
          }
          
          setLoading(false);
        };
    
        simulateProgress();
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    // Run the loading process only on the initial render
    if (loading) {
      fetchData();
    }
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div className="overflow-hidden">
      {loading ? (
        <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
          <h3>{loadingValue}%</h3>
            <Progress value={loadingValue} className='w-60'/>
        </div>
      ) : (
        <div className='animate-wiggle'>
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
