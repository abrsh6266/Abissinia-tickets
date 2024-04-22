const SubmitBtn = ({ text }: { text: string }) => {
  return (
    <button className="btn btn-primary btn-block " type="submit">
      {text}
    </button>
  );
};

export default SubmitBtn;
