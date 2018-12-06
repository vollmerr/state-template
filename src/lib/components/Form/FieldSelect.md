```jsx


<ExampleForm form={'select'}>
  <FieldSelect 
    name={'select'}
    label={'Select'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
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
</ExampleForm>
```
