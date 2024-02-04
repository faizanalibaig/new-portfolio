'use client';
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const loadingNumber = [33, 55, 88, 100];
  const [loading, setLoading] = useState(false);
  const [loadingValue, setLoadingValue] = useState(0);

  function profilePush() {
    router.push('/profile');
  }

  useEffect(() => {
    setLoading(true);

    const simulateProgress = async () => {
      for (const value of loadingNumber) {
        setLoadingValue(value);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      
      setLoading(false);

      profilePush();
    };

    simulateProgress();
  }, []);

  return (
    <main className="">
      <div>
        {loading ? (
          <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
            <h3>{loadingValue}%</h3>
            <Progress value={loadingValue} className='w-60'/>
          </div>
        ) : null}
      </div>
    </main>
  );
}
