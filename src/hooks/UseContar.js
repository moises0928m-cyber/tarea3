import { useState } from "react";

export function UseContar() {
  const [numero, setNumero] = useState(0);

  let sumar = () => {
    setNumero(numero + 1);
  };
  let restar = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };
  return { sumar, restar, numero };
}
