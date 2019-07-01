```jsx
const initialValues = {
  disabledSelect: 'value 1',
};

<ExampleForm form={'select'} initialValues={initialValues}>
  <FieldSelect 
    name={'select'}
    label={'Select'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
    tooltip={'Example tooltip!'}
    placeholder={'Custom placeholder'}
  />
  <FieldSelect 
    required
    name={'requiredSelect'}
    label={'Required Select'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
  <FieldSelect
    name={'validationsSelect'}
    label={'Select with Custom Validations'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
    validate={[
      (val) => val && val.match(/2/)
        ? undefined
        : 'Must conatin `2` in the value'
    ]}
  />
  <FieldSelect 
    disabled
    name={'disabledSelect'}
    label={'Disabled Select'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
  <FieldSelect
    multiple
    name={'multiSelect'}
    label={'Select Multiple Values'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
      { value: 'value 3', label: 'label 3' },
      { value: 'value 4', label: 'label 4' },
      { value: 'value 5', label: 'label 5' },
      { value: 'value 6', label: 'label 6' },
      { value: 'value 7', label: 'label 7' },
      { value: 'value 8', label: 'label 8' },
    ]}
  />
</ExampleForm>
```
