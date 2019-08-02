```jsx
const initialValues = {
  disabledDate: '01/02/1969',
};

// example `ref`, access using inputRef.current
// this will be used internally instead of the displayRef
const inputRef = React.createRef();

<ExampleForm form={'date'} initialValues={initialValues} inputRef={inputRef}>
  <FieldDate
    name={'date'}
    label={'Date'}
    helpText={'This is the `helpText` content...'}
    tooltip={'Example tooltip!'}
    inputRef={inputRef}
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
