import { utils } from "ethers";

import TokenggAVAX from "../../contracts/TokenggAVAX.json";
import { useStorageAddress } from "../storage";

const useTokenggAVAXContract = () => {
  const { data } = useStorageAddress("TokenggAVAX");

  const contractInterface = new utils.Interface(TokenggAVAX.abi);

  return { address: data?.toString() || "", contractInterface };
};

export default useTokenggAVAXContract;
