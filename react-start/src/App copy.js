// import ClassCom from "./components/ClassCom";
// import ClassState from "./components/ClassState";
// import UseJSX from "./components/UseJSX";
// import FirstPractice from "./components/practice/FirstPractice";
// import FunctionState from "./components/FunctionState";
// import PracticeState from "./components/practice/PracticeState";
// function App() {
//   return (
//   <div>
//     <UseJSX/>
//     <FirstPractice/>
//     <ClassCom></ClassCom>
//     <FunctionState/>
//     <ClassState/>
//     <PracticeState/>
//   </div>
//   );
// }

// export default App;


// import { ClassProps, ClassProps2 } from "./components/ClassProps";
// import FunctionProps from "./components/FunctionProps";
// import PracticeProps from "./components/practice/PracticeProps";

// function App() {
//   return (
//     <div>
//       <FunctionProps name="사과" krPrice={5000} number={10} />
//       <FunctionProps name="샤인머스캣" krPrice={35000} number={3} />
//       <FunctionProps name="복숭아" />
//       <FunctionProps>여기가 children입니다!</FunctionProps>
//       <PracticeProps/>
//       <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cb"/>
//       <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095"/>
//     </div>
//   );
// }

// export default App;

// import Handler_ex from "./ex/Handler_ex";
// import TextColorChange_ex from "./ex/TextColorChange_ex";

// function App(){
//   return(
//     <div>      
//     <Handler_ex/>
//     <TextColorChange_ex/>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// import DOMComponent from "./ex/DOMComponent";
// import DOMComponent2 from "./ex/DOMComponent2";
// import DOMComponent3 from "./ex/DOMComponent3";
// import RefVarState from "./ex/RefVarState";
// import ConditionalOne from "./ex/ConditionalOne";
// import ConditionalTwo from "./ex/ConditionalTwo";

// function App(){
//   const [show, setShow] = useState(true);
//   const [see, setSee] = useState(true);
//   return(
//     <>      
//     <DOMComponent/>
//     <br/>
//     <DOMComponent2/>
//     <br/>
//     <DOMComponent3/>
//     <br/>
//     <RefVarState/>
//     <br/>
//     <div style={{ textAlign: "center"}}>
//       {see && <ConditionalOne str={"hi"} />}
//       {!see && <ConditionalTwo str={"bye"} />}
//       <button onClick={() => setSee(!see)}>
//       {see && "hi"}
//       {!see && "bye"}
//       </button>
//     </div>
//     {show}
//     </>
//   );
// }

// export default App;

import PropsMap from "./components/ProsMap";
import PororoObj from "./components/practice/PororoObj";
import PracticeMap from "./components/practice/PracticeMap";
import BasicCss from "./components/BasicCss";

function App() {
  const dataArr = [
    { name: "peach", krPrice: 10000, count: 5 },
    { name: "strawberry", krPrice: 14000, count: 1 },
    { name: "pear", krPrice: 5000, count: 6 },
    { name: "apple", krPrice: 10000, count: 10 },
    { name: "mango", krPrice: 20000, count: 2 },
  ];
  return (
    <>
      <PropsMap arr={dataArr} />
      <hr />
      <PracticeMap />
      <hr />
      <PororoObj />
      <hr />
      <BasicCss />
    </>
  );
}

export default App;