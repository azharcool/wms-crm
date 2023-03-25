import TableMessage from "components/table-message";

interface INoDataTableRow {
  title?: string;
  colSize?: number;
}

function NoDataTableRow(props: INoDataTableRow) {
  const { title, colSize } = props;
  return <TableMessage colspan={colSize} message={title} />;
}

export default NoDataTableRow;
