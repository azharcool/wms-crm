import { Route } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as PurchasesLoadable from "./loadRoutes/purchases.load";

const purchasesRouting = (
  <Route
    element={<PurchasesLoadable.PurchasesLayout />}
    path={`${AppRoutes.purchases.layout}`}
  >
    {/* purchase order listing */}
    <Route
      element={<PurchasesLoadable.PurchasesOrderListing />}
      path={`${AppRoutes.purchases.purchaseOrders.listing}`}
    />

    {/* purchase order create */}
    <Route
      element={<PurchasesLoadable.PurchasesOrderCreate />}
      path={`${AppRoutes.purchases.purchaseOrders.create}`}
    />

    {/* purchase order update */}
    <Route
      element={<PurchasesLoadable.PurchasesOrderUpdate />}
      path={`${AppRoutes.purchases.purchaseOrders.update}`}
    />

    {/* purchase order details  */}
    <Route
      element={<PurchasesLoadable.PurchasesOrderDetails />}
      path={`${AppRoutes.purchases.purchaseOrders.details}/:purchaseOrderId`}
    />

    {/* supplier listing  */}
    <Route
      element={<PurchasesLoadable.SupplierListing />}
      path={`${AppRoutes.purchases.supplier.listing}`}
    />

    {/* supplier create  */}
    <Route
      element={<PurchasesLoadable.SupplierCreate />}
      path={`${AppRoutes.purchases.supplier.create}`}
    />

    {/* supplier update  */}
    <Route
      element={<PurchasesLoadable.SupplierUpdate />}
      path={`${AppRoutes.purchases.supplier.update}`}
    />

    {/* supplier details  */}
    <Route
      element={<PurchasesLoadable.SupplierDetails />}
      path={`${AppRoutes.purchases.supplier.details}/:supplierId`}
    />

    {/* supplier return  listing  */}
    <Route
      element={<PurchasesLoadable.SupplierReturnListing />}
      path={`${AppRoutes.purchases.supplierReturns.listing}`}
    />

    {/* supplier return  create  */}
    <Route
      element={<PurchasesLoadable.SupplierReturnCreate />}
      path={`${AppRoutes.purchases.supplierReturns.create}`}
    />

    {/* supplier return  update  */}
    <Route
      element={<PurchasesLoadable.SupplierReturnUpdate />}
      path={`${AppRoutes.purchases.supplierReturns.update}`}
    />

    {/* supplier return  details  */}
    <Route
      element={<PurchasesLoadable.SupplierReturnDetails />}
      path={`${AppRoutes.purchases.supplierReturns.details}/:supplierReturnId`}
    />
  </Route>
);

export default purchasesRouting;
