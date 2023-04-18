import { Route } from "react-router-dom";
import AppRoutes from "../appRoutes";
import * as PurchasesLoadable from "../load-routes/purchases.load";

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
      path={`${AppRoutes.purchases.purchaseOrders.update}/:purchaseOrderId`}
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
      path={`${AppRoutes.purchases.supplier.update}/:supplierId`}
    />

    {/* supplier details */}
    <Route
      element={<PurchasesLoadable.SupplierDetailsTab />}
      path={`${AppRoutes.purchases.supplier.details}/:supplierId`}
    >
      {/* details  */}
      <Route
        element={<PurchasesLoadable.SupplierGeneralDetails />}
        path={`${AppRoutes.purchases.supplier.generalDetails}`}
      />
      <Route
        element={<PurchasesLoadable.SupplierAddressDetails />}
        path={`${AppRoutes.purchases.supplier.addressDetails}`}
      />
      <Route
        element={<PurchasesLoadable.SupplierBankAccountDetails />}
        path={`${AppRoutes.purchases.supplier.bankAccountDetails}`}
      />

      {/* listing  */}
      <Route
        element={<PurchasesLoadable.SupplierPurchasesListing />}
        path={`${AppRoutes.purchases.supplier.purchases}`}
      />
      <Route
        element={<PurchasesLoadable.SupplierHistoryListing />}
        path={`${AppRoutes.purchases.supplier.history}`}
      />
    </Route>

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
      path={`${AppRoutes.purchases.supplierReturns.update}/supplierReturnId`}
    />

    {/* supplier return  details  */}
    <Route
      element={<PurchasesLoadable.SupplierReturnDetails />}
      path={`${AppRoutes.purchases.supplierReturns.details}/:supplierReturnId`}
    />
  </Route>
);

export default purchasesRouting;
