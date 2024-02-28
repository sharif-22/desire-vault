import { useEffect, useState } from "react";
import ProductForm from "../component/UiComponents/ProductForm";
import VaultCard from "../component/UiComponents/VaultCard";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/index";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import { useParams } from "react-router-dom";

const Product = () => {
  const { uid } = useParams();
  console.log(uid);
  const [userVault, setUserVault] = useState([]);
  const [render, reRender] = useState(false);

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
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-5 xl:p-0 grid grid-flow-col ">
        <div className="sticky top-5">
          <ProductForm />
        </div>
        <div>
          {userVault.map((items, index) => {
            console.log(items);
            const { productName, price, desc, productURL, id } = items;
            return (
              <div key={index} className="mb-4 mx-4">
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
      <Footer/>
    </div>
  );
};

export default Product;
