"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoadingAnimation() {
  const router = useRouter();
  const [isRouteChanging, setIsRouteChanging] = useState(false);

  // Detecta alteração de rota para o status de carregando
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsRouteChanging(true);
    };

    const handleRouteChangeComplete = () => {
      setIsRouteChanging(false);
    };

    window.addEventListener('beforeunload', handleRouteChangeStart);
    window.addEventListener('load', handleRouteChangeComplete);

    return () => {
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      window.removeEventListener('load', handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
    {isRouteChanging && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="rounded-lg p-6 flex flex-col items-center">
            <Image alt="logo da equipe furia do cs" width={80} height={80} src="https://yt3.googleusercontent.com/_QDHD8FYiV_Xhk4pdtzme9OOtbg6LMCOcSz3-Sv0AVUbSccWbtQJlIbk2sIEiBbQsIgwn64onQ=s160-c-k-c0x00ffffff-no-rj" className="rounded-full animate-pulse" />
            <div className="mt-4 flex space-x-2">
              <div className="w-3 h-3 bg-white-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-white-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-white-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <p className="mt-2 text-gray-300">Carregando...</p>
          </div>
        </div>
      )}
    </>
  )
}