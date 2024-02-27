import React, { useEffect, useState } from "react";
import ProductForm from "../component/UiComponents/ProductForm";
import VaultCard from "../component/UiComponents/VaultCard";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import db from "../firebase/index";

const Product = () => {
  const [userVault, setUserVault] = useState([]);
  const [render, reRender] = useState(false);

  useEffect(() => {
    //get overall data
    const getFirebaseDatas = async (user) => {
      const querySnapshot = await getDocs(collection(db, user));
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

    getFirebaseDatas("sharif");
  }, [render]);

  const deleteData = async (deleteCard) => {
    await deleteDoc(doc(db, deleteCard.user, deleteCard.id));
    reRender(!render);
  };

  return (
    <div className="max-w-7xl mx-auto p-5 xl:p-0 grid grid-flow-col ">
      <div className="sticky top-5">
        <ProductForm />
      </div>
      <div>
        {userVault.map((items, index) => {
          const { category, description, price, product, url, user, id } =
            items;
          return (
            <div className="mb-4 mx-4">
              <VaultCard
                deleteData={() => {
                  console.log("clicked");
                  deleteData({ user: user, id: id });
                }}
                key={index}
                product={product}
                category={category}
                desc={description}
                price={price}
                url={url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
