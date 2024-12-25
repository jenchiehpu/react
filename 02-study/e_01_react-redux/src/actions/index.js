export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export function actionIncrease() {
  return {
    type: INCREASE,
  };
}

export function actionDecrease() {
  return {
    type: DECREASE,
  };
}

/* // flow
type ActionIncrease = {
  type: typeof INCREASE,
};

type ActionDecrease = {
  type: typeof DECREASE,
};

export type ActionTypes = ActionIncrease | ActionDecrease;
*/
