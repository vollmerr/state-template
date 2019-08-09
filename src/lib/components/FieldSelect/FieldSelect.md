```jsx
import { FieldSelect, fieldOptions } from 'state-template';

const initialValues = {
  disabledSelect: 'value 1',
};

// example `ref`, access using inputRef.current
const inputRef = React.createRef();

<ExampleForm form={'select'} initialValues={initialValues} inputRef={inputRef}>
  <FieldSelect 
    name={'select'}
    label={'Select'}
    options={fieldOptions.countyOptionsCA}
    helpText={'This is the `helpText` content...'}
    tooltip={'Example tooltip!'}
    inputRef={inputRef}
  />
  <FieldSelect 
    required
    name={'requiredSelect'}
    label={'Required Select'}
    options={fieldOptions.yesNoOptions}
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
