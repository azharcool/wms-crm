import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addBankAccount,
  addBillingAddress,
  addShippingAddress,
  addSupplier,
  buldDeleteSupplier,
  deleteBankAccount,
  deleteBillingAddress,
  deleteShippingAddress,
  deleteSupplier,
  editBankAccount,
  editBillingAddress,
  editShippingAddress,
  editSupplier,
} from "services/supplier.services";
import { AddBankAccountRoot } from "types/catalog/supplier/addBankAccountRequest";
import { AddBillingAddressRoot } from "types/catalog/supplier/addBillingAddressRequest";
import { AddShippingAddressRoot } from "types/catalog/supplier/addShippingAddressRequest";

import { AddSupplierRequestRoot } from "types/catalog/supplier/addSupplierRequest";
import { EditBankAccountRoot } from "types/catalog/supplier/editBankAccountRequest";
import { EditBillingRoot } from "types/catalog/supplier/editBillingAddressRequest";
import { QueryKeys } from "utils/QueryKeys";

function useSupplierAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const editSupplierAction = async (
    data: AddSupplierRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editSupplier(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllSupplierWithPagination]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const addSupplierAction = async (
    data: AddSupplierRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addSupplier(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllSupplierWithPagination]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const deleteSupplierAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteSupplier(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllSupplierWithPagination]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const bulkDeleteSupplierAsync = async (ids: string): Promise<boolean> => {
    try {
      const response = await buldDeleteSupplier(ids);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllSupplierWithPagination]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const addShippingAddressAction = async (
    data: AddShippingAddressRoot,
  ): Promise<boolean> => {
    try {
      const response = await addShippingAddress(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.getAllShippingAddressByIdSupplier,
        ]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const editShippingAddressAction = async (
    data: AddShippingAddressRoot,
  ): Promise<boolean> => {
    try {
      const response = await editShippingAddress(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.getAllShippingAddressByIdSupplier,
        ]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const deleteShippingAddressAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteShippingAddress(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.getAllShippingAddressByIdSupplier,
        ]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const addBillingAddressAction = async (
    data: AddBillingAddressRoot,
  ): Promise<boolean> => {
    try {
      const response = await addBillingAddress(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.getAllBillingAddressByIdSupplier,
        ]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const editBillingAddressAction = async (
    data: EditBillingRoot,
  ): Promise<boolean> => {
    try {
      const response = await editBillingAddress(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.getAllBillingAddressByIdSupplier,
        ]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const deleteBillingAddressAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteBillingAddress(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.getAllBillingAddressByIdSupplier,
        ]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const addBankAccountAction = async (
    data: AddBankAccountRoot,
  ): Promise<boolean> => {
    try {
      const response = await addBankAccount(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.getAllBankAccountBySupplierId,
        ]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const editBankAccountAction = async (
    data: EditBankAccountRoot,
  ): Promise<boolean> => {
    try {
      const response = await editBankAccount(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.getAllBankAccountBySupplierId,
        ]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const deleteBankAccountAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteBankAccount(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.getAllBankAccountBySupplierId,
        ]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  return {
    addSupplierAction,
    deleteSupplierAsync,
    bulkDeleteSupplierAsync,
    editSupplierAction,
    addShippingAddressAction,
    editShippingAddressAction,
    deleteShippingAddressAsync,
    addBillingAddressAction,
    editBillingAddressAction,
    deleteBillingAddressAsync,
    addBankAccountAction,
    editBankAccountAction,
    deleteBankAccountAsync,
  };
}

export default useSupplierAction;
