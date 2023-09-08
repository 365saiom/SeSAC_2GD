// function FunctionProps(props) {
  // props={
  //     name:'',
  //     krPrice:number,
  //     number:number
  // }
//   return (
//     <div>
//       <h5>{props.name}</h5>
//       <p>
//         {props.number} 개에 {props.krPrice} 원 (${props.krPrice / 1000})
//       </p>
//       <hr />
//     </div>
//   );
// }

//   const { name, krPrice, number } = props;
//   // let name = props.name;

//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number} 개에 {krPrice} 원! (${krPrice / 1000})
//       </p>
//       <hr />
//     </div>
//   );
// }

function FunctionProps({ name, number, krPrice }) {
    return (
      <div>
        <h5>{name}</h5>
        <p>
          {number} 개에 {krPrice} 원! (${krPrice / 1000})
        </p>
        <hr />
      </div>
    );
  }

export default FunctionProps;