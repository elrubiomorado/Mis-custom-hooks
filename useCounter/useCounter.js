//CustomHook para un contador
import { useState } from "react"

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  //Recibira el factor de incremento, que por defecto sera 1
  const increment = (factor = 1) =>{
    setState(state + factor);
  }
  //Recibira el factor de decremento, que por defecto sera 1
  const decrement = (factor = 1) =>{
    setState(state - factor);
  }
  //Reseteara el contador, recibira el factor al cual se quiere resetear
  const reset = (factor = 0)=>{
    setState(factor);
  }
  return ({
    state,
    increment,
    decrement,
    reset
  });
}
