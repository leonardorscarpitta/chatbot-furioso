"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function LoadPage( props ) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
        <div className="rounded-lg p-6 flex flex-col items-center">
          <Image
            alt="logo da equipe furia do cs"
            width={80}
            height={80}
            src="https://yt3.googleusercontent.com/_QDHD8FYiV_Xhk4pdtzme9OOtbg6LMCOcSz3-Sv0AVUbSccWbtQJlIbk2sIEiBbQsIgwn64onQ=s160-c-k-c0x00ffffff-no-rj"
            className="rounded-full animate-pulse"
          />
          <div className="mt-4 flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return ( props.children );
}
