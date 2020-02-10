import React from 'react';

import Input from './Input/Input';

const Form = props => {
  return (
    <form>
      <Input
        ncols={['col-12']}
        properties={[
          {
            name: 'test',
            id: 'test',
            label: 'Test',
            type: 'text',
            placeholder: 'Just testing'
          }
        ]}
      />
      <Input
        ncols={['col-6', 'col-6']}
        properties={[
          {
            name: 'test_two',
            id: 'test-two',
            label: 'Test two',
            type: 'password',
            placeholder: 'Test Two Password'
          },
          {
            name: 'test_three',
            id: 'test-three',
            label: 'Test Three',
            type: 'password',
            placeholder: 'Test Three Password'
          }
        ]}
      />
      <Input
        ncols={['col-12']}
        properties={[
          {
            name: 'new',
            id: 'new',
            label: 'new',
            type: 'text',
            placeholder: 'Just New'
          }
        ]}
      />
    </form>
  );
};

export default Form;
