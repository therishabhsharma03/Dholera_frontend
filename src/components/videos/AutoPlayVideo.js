import React, { useEffect, useRef } from 'react';

const AutoPlayVideo = ({ videoId, width, height, title, onVideoEnd }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handlePlayPause = (entries, observer) => {
      entries.forEach(entry => {
        const iframe = entry.target.querySelector('iframe');
        if (!iframe) return;

        const isIntersecting = entry.isIntersecting;

        const onLoad = () => {
          const message = isIntersecting
            ? '{"event":"command","func":"playVideo","args":""}'
            : '{"event":"command","func":"pauseVideo","args":""}';
          iframe.contentWindow.postMessage(message, '*');
        };

        if (iframe.contentWindow) {
          onLoad();
        } else {
          iframe.addEventListener('load', onLoad);
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.9,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMessage = event => {
      const { data } = event;
      if (data && typeof data === 'string' && data.includes('onStateChange')) {
        const state = JSON.parse(data).info;
        if (state === 0 && onVideoEnd) { // State 0 means the video ended
          onVideoEnd();
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onVideoEnd]);

  return (
    <div ref={containerRef}>
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        title={title}
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default AutoPlayVideo;
