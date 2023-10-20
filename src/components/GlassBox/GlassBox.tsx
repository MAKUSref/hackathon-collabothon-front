import { useState, useRef, PropsWithChildren } from "react";
import { StyledBox, Dash, Content } from "./GlassBox.style";

const MAX_HEIGHT = 470;
const MIN_HEIGHT = 250;

const GlassBox = ({ children }: PropsWithChildren) => {
  const [height, setHeight] = useState(MIN_HEIGHT);
  const [transition, setTransition] = useState(false);

  const swiperRef = useRef<HTMLDivElement>(null);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!swiperRef.current) return;

    const screen = window.innerHeight;
    const position = e.touches[0].pageY;

    const swiperStyles = swiperRef.current.getBoundingClientRect();
    const topHeight = screen - position;

    const bottomHeight = screen - swiperStyles.bottom;
    const newHeight = topHeight - bottomHeight;

    if (newHeight <= MIN_HEIGHT || newHeight >= MAX_HEIGHT) return;

    setHeight(topHeight - bottomHeight);
  };

  const handleTouchEnd = () => {
    setTransition(true);

    const avg = (MAX_HEIGHT - MIN_HEIGHT) / 2;
    const swapBorder = MIN_HEIGHT + avg;

    setHeight((prev) => (prev <= swapBorder ? MIN_HEIGHT : MAX_HEIGHT));
  };

  return (
    <StyledBox
      ref={swiperRef}
      onTransitionEnd={() => setTransition(false)}
      height={height}
      transition={transition}
    >
      <Dash onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} />
      <Content height={height}>{children}</Content>
    </StyledBox>
  );
};

export default GlassBox;
