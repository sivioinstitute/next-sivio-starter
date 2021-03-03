import { Table } from '@components';

export const TableContainer = ({ data, headings }) => {
  return (
    <Table>
      <Table.THead>
        <Table.TR>
          {headings.map((heading, idx) => (
            <Table.TH key={idx}>{heading}</Table.TH>
          ))}
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        {data.map((dt, idx) => (
          <Table.TR key={idx}>
            {/* Get data that corresponds to a heading */}
            {headings.map((h, idx) => (
              <Table.TD key={idx}>{dt[idx]}</Table.TD>
            ))}
          </Table.TR>
        ))}
      </Table.TBody>
    </Table>
  );
};
