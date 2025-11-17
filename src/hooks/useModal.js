import { useState } from "react";

export default function useModal() {
  const [open, setOpen] = useState(false);
  let abrir = () => setOpen(true);
  let cerrar = () => setOpen(false);
  return { open, abrir, cerrar };
}
