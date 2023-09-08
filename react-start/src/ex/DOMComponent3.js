import { useRef } from "react";

// const DOMComponent3 = () { } 
function DOMComponent3() {
    const opList = ["+", "-", "*"];
    const inputRef = useRef(null);
    const num1 = Math.round(Math.random() * 10); //3.5464367
    const opIndex = Math.round(Math.random() * 2);
    const op = opList[opIndex];
    const num2 = 2;

    const calculateResult = () => {
        // eval() -> 권장하는 친구 x
        // eal(문자열) -> 그 문자열을 계산해준다.
        return eval(num1 + op + num2);
        // if (op =="+") return num1 + num2;
        // else if (op =="-") return num1 - num2;
        // else if (op =="*") return num1 * num2;

        return 0;
    }

    const result = calculateResult();
    const calculate = () => {
        if (inputRef.current.value == result) alert("정답");
        else alert("오답");

        inputRef.current.value = "";
        inputRef.current.focus();
    }


    return(
        <div>
            <span>
                {num1} {op} {num2}
            </span>
            <br/>
            <input ref ={inputRef} />
            <button onClick={calculate}>정답 제출</button>
        </div>
    )
}

export default DOMComponent3;