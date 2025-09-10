import Image from "next/image";

type GifImageProps = {
  src: string;
  alt: string;
  size?: number;
  rounded?: boolean;
  className?: string;
};

const GifImage = ({
  src,
  alt,
  size = 128,
  rounded = false,
  className = "",
}: GifImageProps) => {
  return (
    <div
      className={[
        className,
        rounded ? "rounded-full overflow-hidden" : "",
        "inline-block",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-cover"
        unoptimized
      />
    </div>
  );
};

export default GifImage;
