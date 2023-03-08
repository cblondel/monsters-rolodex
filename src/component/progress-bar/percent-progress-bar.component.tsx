import { useEffect, useState } from "react";

interface PercentProgressBarProps {
    initialPercent: number;
}

const PercentProgressBar = (props: PercentProgressBarProps) => {
    const initialPercent = props.initialPercent || 0;
    const [completion, setCompletion] = useState(initialPercent)

    const updateScrollCompletion = () => {
        // see how much we have scrolled
        const currentProgress = window.scrollY;
        // see how much total scroll is available
        let scrollHeight = document.body.scrollHeight - window.innerHeight;

        if (scrollHeight) {
            const completion = Number((currentProgress / scrollHeight).toFixed(2)) * 100;
            setCompletion(completion);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScrollCompletion);
        return () => {
            // remove scroll event listener on umount        
            window.removeEventListener("scroll", updateScrollCompletion);
        }
    }, []);



    return (
        <span
            id="progress-bar"
            style={{
                transform: `translateX(${completion - 100}%)`,
            }}
            className={`absolute left-0 bottom-0 w-full transition-transform duration-150 h-1 bg-cyan-500`}
        />
    )
}

export default PercentProgressBar;