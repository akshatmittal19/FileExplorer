export default function Image({ src, height }) {
  return <img src={src} height={height || "50"} alt="icon" />;
}
