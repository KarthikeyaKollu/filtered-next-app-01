'use client'

import { useState, useEffect } from 'react';
import PdfViewerComponent from '@/components/PdfViewerComponent';

import { useParams } from 'next/navigation';
import ExcalidrawFabric from '@/components/canvas/excalidraw/ExcalidrawFabric';
import ExcalidrawComponent from '@/components/canvas/excalidraw/ExcalidrawComponent';
import { useSettings } from '@/context/SettingsContext';
export default function page() {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const { id }:{id:string} = useParams();
  const {data} = useSettings()
  return (

    <div className="h-full w-full overflow-hidden">

      <div className="flex flex-col items-center pb-8   overflow-hidden" >
        <PdfViewerComponent isExpanded={isExpanded} id={id} />

        { data && <div className="fixed inset-0  overflow-hidden w-full h-full bg-transparent" style={{zIndex:50}}>
          <ExcalidrawComponent id={id} />
        </div> }

      </div>
    </div>
  );
}






