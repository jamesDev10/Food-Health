import { useState } from "react";
import { Delivered } from "../componentes/OrderCards/Delivered";
import { Finished } from "../componentes/OrderCards/Finished";
import { Order } from "../componentes/OrderCards/Order";

export const useOrderCards = () => {
  const [component, setComponent] = useState("order");

  const validateComponents = {
    "order": <Order />,
    "delivered": <Delivered />,
    "finished": <Finished />
  }

  return {
    component,
    setComponent,
    validateComponents
  };
};
