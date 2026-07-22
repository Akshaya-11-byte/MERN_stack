import { useState } from "react";

function Light() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "100px" }}>
        {isOn ? "💡" : "⚫"}
      </h1>

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default Light;
//import { useState } from "react";

// function Light() {

//   // Initially, the light is OFF
//   const [light, setLight] = useState(false);

//   return (
//     <div>
//       {/* Show the emoji */}
//       <h1>{light ? "💡" : "⚫"}</h1>

//       {/* Button */}
//       <button onClick={() => setLight(!light)}>
//         {light ? "Turn Off" : "Turn On"}
//       </button>
//     </div>
//   );
// }

// export default Light;