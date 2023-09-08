import "../styles/style.scss";
import img1 from "../assets/img1.png";
import UseScss01 from "./UseScss01";

export default function UseScss(){
    return(
        <>
        <div className="div1">
            <div className="div2">
                <div className="div3"></div>
            </div>
            <button className="btn orangered">Button1</button>
            <button className="btn btn--opacity">Button2</button>
            <button className="btn btn--blue">Button3</button>
        </div>

        <div className="container">
            {/* .box1*3+p.circle*3+.box2{HI$}*4 */}
            <div className="box1"></div>
            <div className="box1"></div>
            <div className="box1"></div>
            <p className="circle"></p>
            <p className="circle"></p>
            <p className="circle"></p>
            <div className="box2">HI1</div>
            <div className="box2">HI2</div>
            <div className="box2">HI3</div>
            <div className="box2">HI4</div>
        </div>
        <h2>참고 &gt; 이미지 적용하기</h2>
        <img src="../assets.img1.png" alt="경로명으로 접근" width={"100px"} />
        <img src={img1} alt="import로 접근" width={"100px"}/>
        <div className="arc-img img-test"></div>

        <h4>2. public 폴더 내부의 이미지 가져오기</h4>
        <img src="/img1.png" alt="public 폴더 사진 접근" width={"100px"} />
        <img
        src={process.env.PUBLIC_URL + "/img1.png"}
        alt="public 폴더 사진 접근"
        width={"100px"}
      />
      <div className="public-img img-test"></div>

            <h1>실습문제</h1>
            <div className="practice">
            <div className="text img1"></div>
            <div className="text img2"></div>
            <div className="text img3"></div>
            <div className="text img4"></div>
            </div>
            <UseScss01/>
        </>

    );
}