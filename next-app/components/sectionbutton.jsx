export default function SectionButton({ buttonText, buttonLink }) {
  return (
    <div className="button">
      <a href={buttonLink} className="link-btn">
        {buttonText}
      </a>
    </div>
  );
}
