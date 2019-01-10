```jsx
const initialValues = {
  radioButton: 'value2',
  requiredRadioButton: 'value2',
  disabledRadioButton: 'value2',
};

<ExampleForm form={'radioButton'} initialValues={initialValues}>
  <FieldRadioButtons 
    name={'radioButton'}
    label={'Radio Button'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
  />
  <FieldRadioButtons 
    required
    name={'requiredRadioButton'}
    label={'Required Radio Button'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
  />
  <FieldRadioButtons 
    disabled
    name={'disabledRadioButton'}
    label={'Disabled Radio Button'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
  />
</ExampleForm>
```

### highlight variant

```jsx
const initialValues = {
  primaryRadioButton: 'value2',
  requiredPrimaryRadioButton: 'value2',
  disabledPrimaryRadioButton: 'value2',
};

<ExampleForm form={'radioButtonPrimary'} initialValues={initialValues}>
  <FieldRadioButtons 
    variant={'highlight'}
    name={'primaryRadioButton'}
    label={'Primary Radio Button'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
  />
  <FieldRadioButtons 
    required
    variant={'highlight'}
    name={'requiredPrimaryRadioButton'}
    label={'Required Primary Radio Button'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
  />
  <FieldRadioButtons 
    disabled
    variant={'highlight'}
    name={'disabledPrimaryRadioButton'}
    label={'Disabled Primary Radio Button'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
  />
</ExampleForm>
```
