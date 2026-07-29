import "./DetailCard.css";

function DetailCard({ icon, title, value }) {
  return (
    <div className="detail-card">
      <h3>
        {icon} {title}
      </h3>

      <p>{value}</p>
    </div>
  );
}

export default DetailCard;
