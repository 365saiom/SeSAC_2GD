import ChangeObj from './ChangeObj';
export default function PororoObj() {
  const pororoObjArr = [
{
name: '뽀로로',
age: '7',
nickName: '사고뭉치',
},
{
name: '루피',
age: '5', nickName: '공주님',
},
{
name: '크롱',
age: '4',
nickName: '장난꾸러기',
}, ];
  return (
    <div> <ChangeObj objArr={pororoObjArr} /> </div>
);
  }

// import MapChild from "./MapChild";

// export default function PracticeMap(){
//     const items = [ 
//         {
//             item: "PS5",
//             price: "685,000",
//         },
//         {
//             item: "에어 프라이어",
//             price: "50,000",
//         }, 
//         {
//             item: "사세 치킨윙",
//             price: "11,500", 
//         },
//         ];

//         return(
//             <>
//             {/* {items.map((data, index)=>{
//                 return <MapChild item={data.item} price={data.price} key={index} />
                
//             })} */}
//                 <MapChild item={items[0].item} price={items[0].price} />
//                 <MapChild item={items[1].item} price={items[1].price} />
//                 <MapChild item={items[2].item} price={items[2].price} />
//             </>
//         );
// }