const TableHeader = ({ sample }) => {
  return (
    <tr>
      {Object.keys(sample).map((x) => {
        return !x.toLowerCase().includes('id') && <th key={x}>{x}</th>;
      })}
    </tr>
  );
};

export default TableHeader;
