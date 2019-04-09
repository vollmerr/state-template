```jsx
const initialValues = {
  checkbox: ['value2'],
  requiredCheckbox: ['value2'],
  disabledCheckbox: ['value2'],
};

<ExampleForm form={'checkbox'} initialValues={initialValues}>
  <FieldCheckboxes 
    name={'checkbox'}
    label={'Checkbox'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
  />
  <FieldCheckboxes 
    required
    name={'requiredCheckbox'}
    label={'Required Checkbox'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
  />
  <FieldCheckboxes 
    disabled
    name={'disabledCheckbox'}
    label={'Disabled Checkbox'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
    required
  />
</ExampleForm>
```

### inline

```jsx
const initialValues = {
  inlineCheckbox: 'value2',
};

<ExampleForm form={'inlineCheckbox'} initialValues={initialValues}>
  <FieldCheckboxes 
    inline
    name={'inlineCheckbox'}
    label={'Inline Checkbox'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
      { value: 'value3', label: 'label 3' },
    ]}
  />
</ExampleForm>
```

### primary variant

```jsx
const initialValues = {
  primaryCheckbox: ['value2'],
  requiredPrimaryCheckbox: ['value2'],
  disabledPrimaryCheckbox: ['value2'],
};

<ExampleForm form={'checkboxPrimary'} initialValues={initialValues}>
  <FieldCheckboxes 
    variant={'primary'}
    name={'primaryCheckbox'}
    label={'Primary Checkbox'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
  />
  <FieldCheckboxes 
    required
    variant={'primary'}
    name={'requiredPrimaryCheckbox'}
    label={'Required Primary Checkbox'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
  />
  <FieldCheckboxes 
    disabled 
    variant={'primary'}
    name={'disabledPrimaryCheckbox'}
    label={'Disabled Primary Checkbox'}
    options={[
      { value: 'value1', label: 'label 1' },
      { value: 'value2', label: 'label 2' },
    ]}
  />
</ExampleForm>
```
