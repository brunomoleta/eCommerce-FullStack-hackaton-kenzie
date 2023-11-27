import React, { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";
import { IFullProductContext, IProductContext } from "../../types/product";

export const ProductContext = createContext({});

const useProductContext = () => React.useContext(ProductContext);

const ProductProvider = (props: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [allProducts, setAllProducts] = useState<IProductContext[]>([]);
  const [singleProduct, setSingleProduct] = useState(allProducts[0]);
  const [productsPage, setProductsPage] = useState({
    prevPage: "",
    nextPage: "",
  });

  const getAllProducts = async (page: number, perPage: number) => {
    const { data } = await api.get("products/all", {
      params: { page: page, perPage: perPage },
    });
    const { products, prevPage, nextPage } = data;

    setProductsPage({ prevPage, nextPage });
    setAllProducts(products);
  };

  const getProductsByCategory = async (
    categoryName: string,
    url: string | null,
  ) => {
    const { data } = await api.get(
      `products/category/${categoryName}${url ? url : "/"}`,
    );
    const { products, prevPage, nextPage } = data;

    const productsList = products.map((product) => product.product);

    setAllProducts(productsList);
    return { prevPage, nextPage };
  };
  //
  // const getProductsByBrand = async (brandName: string) => {
  //
  // }

  const getProductById = async (id: number | undefined) => {
    try {
            setIsLoading(!isLoading);

      const { data } = await api.get(`/products/${id}`);
      console.log(data);
      console.log("single", data);
      setSingleProduct(data);
      return data;
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(!isLoading);
    }
  };

  const values: IFullProductContext = {
    allProducts,
    setAllProducts,

    getAllProducts,
    getProductsByCategory,
    // getProductsByBrand,
    singleProduct,
    setSingleProduct,

    getProductById,

    productsPage,
  };

  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  );
};

export {ProductProvider, useProductContext};
