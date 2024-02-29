import { useEffect, useState } from "react";
import ProductForm from "../component/UiComponents/ProductForm";
import VaultCard from "../component/UiComponents/VaultCard";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/index";
import { Vault } from "../Context";
import { AntSkeletonText } from "../component/UiComponents/AntSkeletonText.jsx";

import { useContext } from "react";

import { useParams } from "react-router-dom";

const Product = () => {
  const { uid } = useParams();
  console.log(uid);
  const [userVault, setUserVault] = useState([]);
  const [loading, setLoading] = useState(true); // for loading skeleton
  const [userUID, render, reRender] = useContext(Vault);

  useEffect(() => {
    //get overall data
    const getFirebaseDatas = async (user) => {
      const querySnapshot = await getDocs(collection(db, uid));
      const data = querySnapshot.docs.map((doc) => {
        const getData = doc.data();
        const getId = doc.id;
        const finalData = { ...getData, id: getId };
        return finalData;
      });
      setUserVault(data);
      if (querySnapshot.docs.length === 0) {
        console.log("norecord exist");
      }
      setLoading(false);
    };

    getFirebaseDatas(uid);
  }, [render]);

  // added settimeout for loading
  useEffect(() => {
    const timeoutSkeleton = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutSkeleton);
  }, []);

  const deleteData = async (deleteCard) => {
    await deleteDoc(doc(db, deleteCard.user, deleteCard.id));
    reRender(!render);
  };

  let sum = userVault.reduce((prev, curr) => {
    return prev + parseInt(curr.price);
  }, 0);
  console.log(sum);

  return (
    <div>
      <div className="flex items-center justify-center md:ml-5 pt-5 px-5 ">
        <p className="bg-slate-700 text-sm md:text-xl mt-20 w-full  lg:w-3/4 mx-auto dark:bg-gray-600 text-white py-4 px-10">
          Tottal amount of your vault is: ₹ {sum}
        </p>
      </div>
      <div
        className={`lg:max-w-6xl 2xl:max-w-7xl pt-16 mx-auto  flex lg:flex-row-reverse flex-col-reverse ${
          userVault.length > 4 ? "h-auto" : "lg:h-screen"
        }`}
      >
        <div className="lg:sticky lg:top-5">
          <ProductForm />
        </div>
        {loading ? (
          <AntSkeletonText />
        ) : userVault.length === 0 ? (
          <div className="flex flex-col justify-center items-center mx-auto">
            <img
              src="../pngdata.png"
              alt=""
              className="items-center w-40 h-40"
            />
            <p className="text-2xl font-medium text-gray-600">
              There is no data in Desire Vault
            </p>
          </div>
        ) : (
          <div className="w-full justify-center xs:grid">
            {}
            {userVault.map((items, index) => {
              // console.log(items);
              const { productName, price, desc, productURL, id } = items;
              return (
                <div key={index} className="mb-4 mx-4 flex-1">
                  <VaultCard
                    deleteData={() => {
                      console.log("clicked");
                      deleteData({ user: uid, id: id });
                    }}
                    key={index}
                    product={productName}
                    productURL={productURL}
                    desc={desc}
                    price={price}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
