const Loading = () => {
    return (
      <div className="flex justify-center items-center h-full mb-96 mt-20">
        <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
          <circle
            className="pl__ring pl__ring--a"
            cx="120"
            cy="120"
            r="105"
            fill="none"
            stroke="#000"
            strokeWidth="20" // Changed to camelCase
            strokeDasharray="0 660" // Changed to camelCase
            strokeDashoffset="-330" // Changed to camelCase
            strokeLinecap="round" // Changed to camelCase
          ></circle>
          <circle
            className="pl__ring pl__ring--b"
            cx="120"
            cy="120"
            r="35"
            fill="none"
            stroke="#000"
            strokeWidth="20" // Changed to camelCase
            strokeDasharray="0 220" // Changed to camelCase
            strokeDashoffset="-110" // Changed to camelCase
            strokeLinecap="round" // Changed to camelCase
          ></circle>
          <circle
            className="pl__ring pl__ring--c"
            cx="85"
            cy="120"
            r="70"
            fill="none"
            stroke="#000"
            strokeWidth="20" // Changed to camelCase
            strokeDasharray="0 440" // Changed to camelCase
            strokeLinecap="round" // Changed to camelCase
          ></circle>
          <circle
            className="pl__ring pl__ring--d"
            cx="155"
            cy="120"
            r="70"
            fill="none"
            stroke="#000"
            strokeWidth="20" // Changed to camelCase
            strokeDasharray="0 440" // Changed to camelCase
            strokeLinecap="round" // Changed to camelCase
          ></circle>
        </svg>
        <p className="font-mono text-2xl ml-2">Abissinia Tickets</p>
      </div>
    );
  };
  
  export default Loading;
  