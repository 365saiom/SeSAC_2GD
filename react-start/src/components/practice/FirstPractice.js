function FirstPractice(){
    let helloStr = 'Hello, first exercise';
    return <div style={{marginTop:'32px', backgroundColor:'skyblue'}} onClick={(()=>alert("클릭됨"))}>{helloStr}</div>;
}

export default FirstPractice;
