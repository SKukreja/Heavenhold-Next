import { useEffect } from 'react';

type LoopVideoProps = {
    videoSrc: string;
};

export default function LoopVideo({ videoSrc }: LoopVideoProps) {
    useEffect(() => {
        // This effect will run whenever the videoSrc prop changes
        // You can add any logic here that you want to run when the prop changes
    }, [videoSrc]);

    return (
        <div className="w-full h-auto">
            <video key={videoSrc} width="320" height="240" className="w-full h-full object-cover" preload="none" autoPlay loop muted>
                <source src={videoSrc} type="video/mp4" />                  
            </video>
        </div>
    );
}
