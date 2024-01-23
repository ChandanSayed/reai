export default function ChatField({ text, styles }) {
  return (
    <div className={`shadow-onboard-shadow p-4 rounded-lg relative after:absolute after:rounded-sm after:w-4 after:h-5 ${styles} after:top-4 after:transform after:rotate-45 after:-z-0  after:block font-normal`}>
      <p className="text-sm md:text-base">{text}</p>
    </div>
  );
}
