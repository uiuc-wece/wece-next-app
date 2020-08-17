import Link from "next/link";

export default function SectionButton({ buttonText, buttonLink }) {
  return (
    <div className="button">
      <Link href={buttonLink}>
        <a className="link-btn">{buttonText}</a>
      </Link>
    </div>
  );
}
