import { useRef } from "react";
function DOMComponent() {
  // const 변수명 = useRef(null);
  // <~~~~ ref={변수명} />
  const inputRef = useRef(null);

  const getInput = () => {
    // DOM에서 INPUT을 선택해 값을 가져오는 역할
    const input = document.getElementById("input");
    console.log("input value : ", input.value);
  };
  const getInput2 = () => {
    if (!inputRef.current) return;

    // inputRef.current = <input type="text" id="input" ref={inputRef} />
    // console.log("input value2 : ", inputRef.current?.value);
    inputRef.current.focus();
  };
  getInput2();
  return (
    <div>
      <input type="text" id="input" ref={inputRef} />
      <button onClick={getInput}>버튼</button>
      <button onClick={getInput2}>버튼2</button>
      <br/>
      <input type="text" id="input" ref={inputRef} />
      <button onClick={getInput}>버튼</button>
      <button onClick={getInput2}>버튼2</button>
      <br/>
      <input type="text" id="input" ref={inputRef} />
      <button onClick={getInput}>버튼</button>
      <button onClick={getInput2}>버튼2</button>
    </div>
    
  );
}

export default DOMComponent;