import { useQuery } from "react-query";
import { getAllBankAccount } from "services/supplier.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllBankAccount {
  supplierId: number;
}

function useGetAllBankAccount(props: IuseGetAllBankAccount) {
  const cachedKey = [QueryKeys.getAllBankAccountBySupplierId, props.supplierId];
  return useQuery(cachedKey, () => getAllBankAccount(props.supplierId), {
    enabled: Boolean(props.supplierId),
  });
}

export default useGetAllBankAccount;
