```jsx


<ExampleForm form={'radioButton'}>
  <FieldRadioButtons 
    name={'radioButton'}
    label={'Radio Button'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
  />
  <FieldRadioButtons 
    required
    name={'requiredRadioButton'}
    label={'Required Radio Button'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
  <FieldRadioButtons 
    disabled
    name={'disabledRadioButton'}
    label={'Disabled Radio Button'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
</ExampleForm>
```

### highlight variant

```jsx
<ExampleForm form={'radioButtonPrimary'}>
  <FieldRadioButtons 
    variant={'highlight'}
    name={'primaryRadioButton'}
    label={'Primary Radio Button'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
    helpText={'This is the `helpText` content...'}
  />
  <FieldRadioButtons 
    required
    variant={'highlight'}
    name={'requiredPrimaryRadioButton'}
    label={'Required Primary Radio Button'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
  <FieldRadioButtons 
    disabled
    variant={'highlight'}
    name={'disabledPrimaryRadioButton'}
    label={'Disabled Primary Radio Button'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
</ExampleForm>
```
