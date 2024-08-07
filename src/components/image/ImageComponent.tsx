import { useEffect, useState } from "react";

interface ImageComponentProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  width,
  height,
  className,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(
    `https://placehold.co/${width}x${height}?text=Loading`
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      className={`${currentSrc === src ? className : `${className} blur-md`}`}
      width={width}
      height={height}
      src={src}
    ></img>
  );
};

export default ImageComponent;
