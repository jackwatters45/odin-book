import { useContext } from "react";

import ContainerWidthContext from "./ContainerWidthContext";

const useContainerWidth = () => useContext(ContainerWidthContext);

export default useContainerWidth;
