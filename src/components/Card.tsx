export default function Card({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <article
      style={{
        border: "1px solid rgba(0,255,209,0.2)",
        background: "linear-gradient(160deg, #07171c, #030d10)",
        padding: "24px",
        borderRadius: "16px",
        transition: "0.3s",
        boxShadow: "0 0 25px rgba(0,255,209,0.08)",
      }}
      className="card"
    >
      <h3
        style={{
          fontFamily: "Barlow Condensed",
          fontSize: "20px",
          color: "#00ffd1",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {title}
      </h3>

      {description && (
        <p
          style={{
            marginTop: "10px",
            color: "rgba(200,230,225,0.75)",
            lineHeight: "1.7",
          }}
        >
          {description}
        </p>
      )}

      {children}
    </article>
  );
}