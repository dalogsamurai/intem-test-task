import { useEffect, useState } from "react";
import TableData from "./table-data.component";
import LoaderPlaceholder from "./loader/loader.component";
import ErrorPlaceHolder from "./error.component";

interface Props {
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  item: any;
  tableId: string;
}

const TableItem = ({ item, tableId }: Props) => {
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [tableValues, setTableValues] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setTableValues(Object.values(item));
  }, [item]);

  return (
    <>
      <LoaderPlaceholder isLoading={isLoading} />
      <ErrorPlaceHolder isError={isError} />

      {tableValues.map((value) => (
        <TableData value={value} item={item} />
      ))}
    </>
  );
};

export default TableItem;
