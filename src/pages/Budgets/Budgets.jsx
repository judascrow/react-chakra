import { DataTable } from "../../components/DataTable";

const data = [
  {
    fromUnit: "inches",
    toUnit: "millimetres (mm)",
    factor: 25.4,
  },
  {
    fromUnit: "feet",
    toUnit: "centimetres (cm)",
    factor: 30.48,
  },
  {
    fromUnit: "yards",
    toUnit: "metres (m)",
    factor: 0.91444,
  },
];

const columns = [
  {
    Header: "To convert",
    accessor: "fromUnit",
  },
  {
    Header: "Into",
    accessor: "toUnit",
  },
  {
    Header: "Multiply by",
    accessor: "factor",
    isNumeric: true,
  },
];

const Budgets = () => {
  return <DataTable columns={columns} data={data} />;
};

export default Budgets;
