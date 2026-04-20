import { useRef } from "react";

export function useClientsMarqueeDrag(posRef, pause, resume, setPosition) {
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);

  // Mouse drag
  const onMouseDown = (e) => {
    isDragging.current = true;
    pause();
    dragStartX.current = e.clientX;
    dragStartPos.current = posRef.current;
    e.currentTarget.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - e.clientX;
    const track = e.currentTarget.querySelector("[data-marquee-track]");
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    let newPos = dragStartPos.current + delta;
    // wrap
    newPos = ((newPos % halfWidth) + halfWidth) % halfWidth;
    setPosition(newPos);
    track.style.transform = `translateX(${-newPos}px)`;
  };

  const onMouseUp = (e) => {
    isDragging.current = false;
    resume();
    e.currentTarget.style.cursor = "grab";
  };

  // Touch drag
  const onTouchStart = (e) => {
    pause();
    dragStartX.current = e.touches[0].clientX;
    dragStartPos.current = posRef.current;
  };

  const onTouchMove = (e) => {
    const delta = dragStartX.current - e.touches[0].clientX;
    const track = e.currentTarget.querySelector("[data-marquee-track]");
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    let newPos = dragStartPos.current + delta;
    newPos = ((newPos % halfWidth) + halfWidth) % halfWidth;
    setPosition(newPos);
    track.style.transform = `translateX(${-newPos}px)`;
  };

  const onTouchEnd = () => {
    resume();
  };

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
