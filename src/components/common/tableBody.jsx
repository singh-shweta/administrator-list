import React from "react";

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map(item => {
        return (
          <tr key={item.email}>
            {columns.map(column => (
              <td>{column.content ? column.content(item) : item[column.id]}</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
