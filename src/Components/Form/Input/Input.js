import React from 'react';

const FieldGroup = props => {
  return (
    <div className='form-group'>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        disabled={props.disabled}
        className='form-control'
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </div>
  );
};

const SelectGroup = props => {
  return (
    <div className='form-group'>
      <label htmlFor={props.id}>{props.label}</label>
      <select className='form-control' disabled={props.disabled}>
        <option value='' />
        {props.options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

const TextAreaGroup = props => {
  return (
    <div className='form-group'>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        class='form-control'
        id={props.id}
        rows='3'
        name={props.name}
        disabled={props.disabled}
      ></textarea>
    </div>
  );
};

const formDrawer = props => {
  let rows = [];

  for (let i = 0; i < props.ncols.length; i++) {
    rows.push(
      <div key={i} className={props.ncols[i]}>
        {props.properties[i].select ? (
          <SelectGroup {...props.properties[i]} />
        ) : props.properties.textarea ? (
          <TextAreaGroup {...props.properties[i]} />
        ) : (
          <FieldGroup {...props.properties[i]} />
        )}
      </div>
    );
  }
  return <div className='row'>{rows}</div>;
};

export default formDrawer;
