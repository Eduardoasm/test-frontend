import React from "react";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import { data } from "../../Data/data";


export default function Home() {
    
    
    console.log(data.products)
    const dataInfo = data.products


  return (
    <div>
      <Navbar />
      <div>
        <div>
            {dataInfo?.map((e) => (
            <div>
            <Products 
            name={e.name}
            stock={e.stock}
            unit_price={e.unit_price}
            image={e.image}
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
