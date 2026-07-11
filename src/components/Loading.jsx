function Loading({ loading }) {
  if (!loading) return null;

  return <div className="loading">⏳ Loading weather...</div>;
}

export default Loading;
