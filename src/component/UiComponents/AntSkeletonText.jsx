import { Skeleton } from "antd";

const AntSkeletonText = () => {
  return (
    <>
      <div className="space-y-4 w-[300px] lg:w-[400px] h-48">
        <Skeleton
          paragraph={{
            rows: 5,
          }}
          active={true}
        />
      </div>
      <div className="space-y-4 w-[300px] lg:w-[400px] h-48">
        <Skeleton
          paragraph={{
            rows: 5,
          }}
          active={true}
        />
      </div>
      <div className="space-y-4 w-[300px] lg:w-[400px] h-48">
        <Skeleton
          paragraph={{
            rows: 5,
          }}
          active={true}
        />
      </div>
    </>
  );
};

const AntSkeletonBtn = () => {
  return <Skeleton.Button shape="square" active={true} />;
};

export { AntSkeletonText, AntSkeletonBtn };




// import { useEffect, useState } from "react"

// import spinimg from "../../../public/Spinner.svg"



// const SpinLoader = () => {
//     const [text , setText] = useState('');
//     const [image , setImage] = useState(true);

//   useEffect(()=>{
//     setTimeout(()=>{
//         setImage(false)
//         setText("this text is shown after run  a spinner");
//     },3000)
//   },[]);

//   return (
//     <div>
//         <div>
//             {image ? (<img src={spinimg}/>) : ((<h1>{text}</h1>))}
//         </div>
//     </div>
//   )
// }

// export default SpinLoader