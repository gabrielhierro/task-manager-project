function Body(props) {
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px] mx-auto space-y-4">{props.children}</div>
    </div>
  );
}

export default Body;
