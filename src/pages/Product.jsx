import { useEffect, useState } from "react";
import ProductForm from "../component/UiComponents/ProductForm";
import VaultCard from "../component/UiComponents/VaultCard";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/index";
import { Vault } from "../Context";

import { useContext } from "react";

import { useParams } from "react-router-dom";

const Product = () => {
  const { uid } = useParams();
  console.log(uid);
  const [userVault, setUserVault] = useState([]);
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
    };

    getFirebaseDatas(uid);
  }, [render]);

  const deleteData = async (deleteCard) => {
    await deleteDoc(doc(db, deleteCard.user, deleteCard.id));
    reRender(!render);
  };

  return (
    <div
      className={`lg:max-w-6xl 2xl:max-w-7xl mt-20 mx-auto p-5 xl:p-0 flex flex-row-reverse ${
        userVault.length > 5 ? "h-auto" : "h-[90dvh]"
      }`}
    >
      <div className="sticky top-5 w-96">
        <ProductForm />
      </div>
      <div className="w-full">
        {userVault.map((items, index) => {
          console.log(items);
          const { productName, price, desc, productURL, id } = items;
          return (
            <div key={index} className="mb-4 mx-4 w-[95%] flex-1">
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
    </div>
  );
};

export default Product;
