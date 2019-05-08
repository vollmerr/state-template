```jsx
const initialValues = {
  date: '2019-01-02',
};

<ExampleForm form={'date'} initialValues={initialValues} >
  <FieldDate
    name={'date'}
    label={'Date'}
    helpText={'This is the `helpText` content...'}
    tooltip={'Example tooltip!'}
  />
  <FieldDate 
    required
    name={'requiredDate'}
    label={'Required Date'}
  />
  <FieldDate
    name={'validationsDate'}
    label={'Date with Custom Validations'}
    validate={[
      (val) => new Date(val) >= new Date()
        ? 'Value must be in the past' 
        : undefined
    ]}
  />
  <FieldDate
    minDate={new Date()}
    name={'minDate'}
    label={'Date with Min Date'}
    helpText={'Min date of today'}
  />
  <FieldDate
    disabled
    name={'disabledDate'}
    label={'Disabled Date'}
  />
</ExampleForm>
```
