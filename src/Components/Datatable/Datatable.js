import React from 'react';

const GenerateTD = (columns, body, onDelete, editpath) => {
  let items = body.map((item, rowIndex) => {
    item = Object.keys(item).reduce((obj, key) => {
      obj[key.toLowerCase()] = item[key];
      return obj;
    }, {});
    return (
      <tr key={rowIndex}>
        {columns.map((col, colIndex) => {
          col = col.toLowerCase();
          col = col.replace(/\s/g, '');
          return (
            <td key={colIndex}>
              {item[col]}
              {col === 'actions' ? (
                <div>
                  <button type='button' className='btn btn-primary'>
                    Edit
                  </button>
                  <button type='button' className='btn btn-danger ml-2'>
                    Delete
                  </button>
                </div>
              ) : null}
            </td>
          );
        })}
      </tr>
    );
  });
  return items;
};

const Datatable = props => (
  <div className='content'>
    <div className='row'>
      <div className='col-12'>
        <table className='table'>
          <thead>
            <tr>
              {props.columns.map((prop, key) => (
                <th key={key}>{prop}</th>
              ))}
            </tr>
          </thead>
          <tbody>{GenerateTD(props.columns, props.data)}</tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Datatable;
