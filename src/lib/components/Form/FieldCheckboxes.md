```jsx
<ExampleForm form={'checkbox'}>
  <FieldCheckboxes 
    name={'checkbox'}
    label={'Checkbox'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
  />
  <FieldCheckboxes 
    required
    name={'requiredCheckbox'}
    label={'Required Checkbox'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
  <FieldCheckboxes 
    disabled
    name={'disabledCheckbox'}
    label={'Disabled Checkbox'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
</ExampleForm>
```

### primary style

```jsx
<ExampleForm form={'checkboxPrimary'}>
  <FieldCheckboxes 
    primary
    name={'primaryCheckbox'}
    label={'Primary Checkbox'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
  />
  <FieldCheckboxes 
    primary
    required
    name={'requiredPrimaryCheckbox'}
    label={'Required Primary Checkbox'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
  <FieldCheckboxes 
    primary
    disabled
    name={'disabledPrimaryCheckbox'}
    label={'Disabled Primary Checkbox'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
</ExampleForm>
```
