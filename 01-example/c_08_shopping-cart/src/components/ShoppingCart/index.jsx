/* eslint-disable jsx-a11y/control-has-associated-label */
// @flow
import React, { useCallback } from 'react';
import ProductItem from './ProductItem';
import BuildItem from './BuildItem';
import { PRODUCTS } from './config';
import type { LineItem } from './config';

const ShoppingCart = () => {
  // https://flow.org/en/docs/types/generics/
  // 和 TS 一樣，但..... vsCode 不認得，就.... 算了
  const [cart, setCart] = React.useState<LineItem[]>([]);

  const atUpdateQuantity = useCallback(
    (id: string) => {
      // 增加數量
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
    },
    [cart],
  );

  const atAddToCart = useCallback(
    (id: string) => {
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
    },
    [cart, atUpdateQuantity],
  );

  const onRemoveItem = useCallback((id: string) => {
    // setCart(cart.filter((item) => item.id !== id)); // bad
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  }, []);

  const totalPrice = React.useMemo(() => {
    return cart.reduce((total, currentItem) => {
      return total + currentItem.price * currentItem.quantity;
    }, 0);
  }, [cart]);

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
