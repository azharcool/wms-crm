import VariantListing from "./VariantListing";

interface IVariants {
  productName: string;
}
function Variants(props: IVariants) {
  const { productName } = props;
  return <VariantListing productName={productName} />;
}

export default Variants;
