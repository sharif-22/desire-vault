import { Skeleton } from "antd";

const AntSkeletonText = () => {
  return (
    <>
      <div className="flex  mx-auto  lg:p-20  w-[300px]  md:w-[600px] lg:w-full h-48">
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
