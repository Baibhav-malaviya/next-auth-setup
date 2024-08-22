"use client";

import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface HlsPlayerProps {
	src: string;
}

const HlsPlayer: React.FC<HlsPlayerProps> = ({ src }) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		if (videoRef.current) {
			if (Hls.isSupported()) {
				const hls = new Hls();
				hls.loadSource(src);
				hls.attachMedia(videoRef.current);
				hls.on(Hls.Events.MANIFEST_PARSED, () => {
					if (videoRef.current) {
						videoRef.current.controls = true;
					}
				});
			} else if (
				videoRef.current.canPlayType("application/vnd.apple.mpegurl")
			) {
				videoRef.current.src = src;
				videoRef.current.addEventListener("loadedmetadata", () => {
					if (videoRef.current) {
						videoRef.current.controls = true;
					}
				});
			}
		}
	}, [src]);

	const handlePlay = () => {
		if (videoRef.current) {
			videoRef.current
				.play()
				.then(() => {
					setIsPlaying(true);
				})
				.catch((error) => {
					console.error("Error attempting to play the video:", error);
				});
		}
	};

	return (
		<div className="video-container">
			{!isPlaying && (
				<button onClick={handlePlay} className="play-button">
					Play
				</button>
			)}
			<video ref={videoRef} style={{ width: "100%", height: "auto" }}>
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default HlsPlayer;
