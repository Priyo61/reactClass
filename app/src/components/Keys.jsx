export default function Keys({ title, done }) {
  return (
    <div>
      {title} - {done ? "done" : "not done"}
    </div>
  );
}
