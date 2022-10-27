import React from "react";
import "antd/dist/antd.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./Products.css";

const { Meta } = Card;

export default function Products({
  name,
  unit_price,
  stock,
  image,
  safeProduct,
}) {

  return (
    <div className="mainProducts">
      <Card
        style={{
          width: 250,
        }}
        cover={<img src={image} alt={image} width="100px" height="200px" />}
        actions={[
          <h3>
            Stock: <br />
            {stock}
          </h3>,
          <ShoppingCartOutlined
            key="ellipsis"
            className="cart"
            style={{ fontSize: "50px" }}
            onClick={() => safeProduct()}
          />,
        ]}
      >
        <div className="meta">
          <Meta title={name} description={unit_price} />
        </div>
      </Card>
    </div>
  );
}
