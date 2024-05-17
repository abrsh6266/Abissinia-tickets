const SectionTitle2 = ({ text }: { text: string }) => {
  return (
    <div className="pb-5 align-element">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-800 to-pink-500 text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
};
export default SectionTitle2;
