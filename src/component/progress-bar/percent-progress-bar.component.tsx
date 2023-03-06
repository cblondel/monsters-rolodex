import * as React from 'react';

interface PercentProgressBarProps {
    initialPercent: number;
}

interface PercentProgressBarState {
    completion: number;
}

class PercentProgressBar extends React.Component<PercentProgressBarProps, PercentProgressBarState> {
    state = {
        completion: this.props.initialPercent
    }

    constructor(props: PercentProgressBarProps) {
        super(props);
        this.updateScrollCompletion = this.updateScrollCompletion.bind(this);
    }

    componentDidMount(): void {
        // add scroll event listener
        window.addEventListener("scroll", this.updateScrollCompletion);
    }

    componentWillUnmount(): void {
        // remove scroll event listener on umount        
        window.removeEventListener("scroll", this.updateScrollCompletion);
    }

    updateScrollCompletion() {
        // see how much we have scrolled
        const currentProgress = window.scrollY;
        // see how much total scroll is available
        let scrollHeight = document.body.scrollHeight - window.innerHeight;
        if (scrollHeight) {
            this.setState(
                { completion: Number((currentProgress / scrollHeight).toFixed(2)) * 100 }
            );
        }
    }

    render() {

        const { completion } = this.state;

        return (
            <span
                id="progress-bar"
                style={{
                    transform: `translateX(${completion - 100}%)`,
                }}
                className={`absolute left-0 bottom-0 w-full transition-transform duration-150 h-1 bg-cyan-500`}
            />
        );
    }
}

export default PercentProgressBar;