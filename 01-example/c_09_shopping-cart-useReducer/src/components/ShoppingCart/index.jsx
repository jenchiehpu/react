/* eslint-disable jsx-a11y/control-has-associated-label */
import { useCallback } from 'react';
import ProductItem from './ProductItem';
import BuildItem from './BuildItem';
import { PRODUCTS } from './config';
import useShopping from '../hooks/useShopping';
import {
  updateQuantity,
  addToCart,
  removeItem,
  clearCart,
  thunk,
} from '../hooks/shoppingActions';

const ShoppingCart = () => {
  const [state, dispatch] = useShopping();
  const { cart, totalPrice, isLoading } = state;

  const atUpdateQuantity = useCallback(
    (id: string) => {
      updateQuantity(dispatch, id);
    },
    [dispatch],
  );

  const atAddToCart = useCallback(
    (id: string) => {
      addToCart(dispatch, id);
    },
    [dispatch],
  );

  const atRemoveItem = useCallback(
    (id: string) => {
      removeItem(dispatch, id);
    },
    [dispatch],
  );

  const atClearCart = useCallback(() => {
    clearCart(dispatch);
  }, [dispatch]);

  const atProceedToCheckout = useCallback(() => {
    dispatch(thunk());
  }, [dispatch]);

  return (
    <section data-name="ShoppingCart">
      {isLoading && <h1>LOADING</h1>}
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
                  onRemoveItem={atRemoveItem}
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
        <button
          disabled={cart.length === 0}
          className="btn btn-lg btn-success empty-cart"
          onClick={atClearCart}
        >
          清空購物車
        </button>
        <button
          disabled={cart.length === 0}
          className="btn btn-lg btn-primary"
          onClick={atProceedToCheckout}
        >
          checkout
        </button>
      </section>
    </section>
  );
};

export default ShoppingCart;
