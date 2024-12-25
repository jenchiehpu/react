/* eslint-disable jsx-a11y/control-has-associated-label */
// @flow
import React from 'react';
import ProductItem from './ProductItem';
import BuildItem from './BuildItem';
import { PRODUCTS } from './config';
import type { LineItem } from './config';

const ShoppingCart = () => {
  // https://flow.org/en/docs/types/generics/
  // 和 TS 一樣，但..... vsCode 不認得，就.... 算了
  const [cart, setCart] = React.useState<LineItem[]>([]);

  const atUpdateQuantity = (id: string) => {
    // 增加數量
    /* // TODO
    const newCart = cart.map((item: LineItem) => {
      if (item.id === id) {
        return {
          // ...item,
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(newCart);
    // */
  };

  const atAddToCart = (id: string) => {
    /* // TODO
    const foundItem = cart.find((data) => data.id === id);
    if (foundItem) {
      atUpdateQuantity(id);
    } else {
      // 新增\
      const foundOriginItem = PRODUCTS.find((data) => data.id === id);

      const lineItem = {
        id,
        price: foundOriginItem.price,
        title: foundOriginItem.title,
        quantity: 1,
      };
      setCart(cart.concat(lineItem));
    }
    // */
  };

  const onRemoveItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);


  return (
    <section data-name="ShoppingCart">
      <div className="row">
        {PRODUCTS.map((itemData) => {
          return (
            <div className="col-3" key={itemData.id}>
              <ProductItem
                id={itemData.id}
                img={itemData.img}
                title={itemData.title}
                price={itemData.price}
                onAddToCart={atAddToCart}
              />
            </div>
          );
        })}
      </div>

      <section className="cart mt-4">
        <h2>購物車</h2>
        <table className="table cart-item-table">
          <thead>
            <tr>
              <th scope="col">項目</th>
              <th scope="col">數量</th>
              <th scope="col">單價</th>
              <th scope="col">小計</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {cart.map((data) => {
              return (
                <BuildItem
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  price={data.price}
                  quantity={data.quantity}
                  onUpdateQuantity={atUpdateQuantity}
                  onRemoveItem={onRemoveItem}
                />
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" />
              <td>總價</td>
              <td>
                <span className="total-price">${totalPrice}</span>
              </td>
              <td />
            </tr>
          </tfoot>
        </table>
        <button disabled={cart.length === 0} className="btn btn-lg btn-success empty-cart" onClick={() => setCart([])}>
          清空購物車
        </button>
      </section>
    </section>
  );
};

export default ShoppingCart;
