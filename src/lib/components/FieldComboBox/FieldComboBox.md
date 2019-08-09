```jsx
import { FieldComboBox } from 'state-template';

const initialValues = {
  disabledComboBox: 'value 2',
};

const scrollingOptions = Array(300).fill(0).map((x, i) => ({ value: `value ${i}`, label: `label ${i}` }));

// example `ref`, access using inputRef.current
const inputRef = React.createRef();

<ExampleForm form={'combo-box'} initialValues={initialValues} inputRef={inputRef}>
  <FieldComboBox 
    name={'comboBox'}
    label={'Combo Box'}
    options={[
      { value: 'red value', label: 'red label' },
      { value: 'orange value', label: 'orange label' },
      { value: 'blue value', label: 'blue label' },
      { value: 'brown value', label: 'brown label' },
      { value: 'purple value', label: 'purple label' },
    ]}
    helpText={'This is the `helpText` content...'}
    tooltip={'Example tooltip!'}
    inputRef={inputRef}
  />
  <FieldComboBox 
    required
    name={'requiredComboBox'}
    label={'Required Combo Box'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
  <FieldComboBox
    name={'validationsComboBox'}
    label={'Combo Box with Custom Validations'}
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
  <FieldComboBox 
    disabled
    name={'disabledComboBox'}
    label={'Disabled Combo Box'}
    options={[
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
    ]}
  />
  <FieldComboBox
    name={'scrollingComboBox'}
    label={'Combo Box with scrolling'}
    options={scrollingOptions}
  />
</ExampleForm>
```
