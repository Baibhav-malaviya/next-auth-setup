import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface VideoJSProps {
	options: any;
	onReady: (player: any) => void;
}

const VideoJS: React.FC<VideoJSProps> = ({ options, onReady }) => {
	const videoRef = useRef<HTMLDivElement>(null);
	const playerRef = useRef<any | null>(null);

	useEffect(() => {
		// Make sure Video.js player is only initialized once
		if (!playerRef.current) {
			// The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
			const videoElement = document.createElement("video-js");
			videoElement.classList.add("vjs-big-play-centered");
			videoRef.current?.appendChild(videoElement);

			const player = (playerRef.current = videojs(videoElement, options, () => {
				videojs.log("player is ready");
				onReady && onReady(player);
			}));
		} else {
			const player = playerRef.current;
			player.autoplay(options.autoplay || false);
			player.src(options.sources || []);
		}
	}, [options, onReady]);

	// Dispose the Video.js player when the functional component unmounts
	useEffect(() => {
		const player = playerRef.current;

		return () => {
			if (player && !player.isDisposed()) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, []);

	return (
		<div data-vjs-player>
			<div ref={videoRef} />
		</div>
	);
};

export default VideoJS;
