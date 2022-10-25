import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import {
  EditOutlined,
  EllipsisOutlined,
  ShoppingCartOutlined
//   SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "./Products.css"


const { Meta } = Card;

export default function Products({name, unit_price, stock, image}) {
  return (
    <div className="mainProducts">
        <div className="containerCard">
            <div>
      <Card
        style={{
          width: 250,
        }}
        cover={
            <img src={image} alt={image}/>
        }
        actions={[
        //   <SettingOutlined key="setting" />,
            
            <h3>Stock: <br/>{stock}</h3>,
        //   <EditOutlined key="edit" />,
          <ShoppingCartOutlined key="ellipsis" className="cart" />,
        ]}
      >
        <div className="meta">
        <Meta
        //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        //   className="meta"
          title={name}
          description={unit_price}
        />
        </div>
      </Card>
            </div>
        </div>
    </div>
  );
}
