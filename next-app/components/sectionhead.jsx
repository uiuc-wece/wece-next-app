function SectionTop({ children }) {
  return <div className="section-top">{children}</div>;
}

export default function SectionHead({ title, top }) {
  if (top) {
    return (
      <SectionTop>
        <div className="section-head">
          <div className="section-title">
            <h3>{title}</h3>
          </div>
        </div>
      </SectionTop>
    );
  } else {
    return (
      <div className="section-head">
        <div className="section-title">
          <h3>{title}</h3>
        </div>
      </div>
    );
  }
}
