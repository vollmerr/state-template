```jsx
import { FieldInput } from 'state-template';

const initialValues = {
  disabledInput: 'Example disabled input...',
};

// example `ref`, access using inputRef.current
const inputRef = React.createRef();

<ExampleForm form={'input'} initialValues={initialValues} inputRef={inputRef}>
  <FieldInput
    name={'input'}
    label={'Input'}
    helpText={'This is the `helpText` content...'}
    onBlur={(e,v) => { console.log('blurring...', e, v) }}
    onChange={(e,v) => { console.log('changing...', e, v) }}
    onFocus={(e,v) => { console.log('focusing...', e, v) }}
    tooltip={'Example tooltip!'}
    inputRef={inputRef}
  />
  <FieldInput 
    required
    name={'requiredInput'}
    label={'Required Input'}
  />
  <FieldInput 
    name={'validationsInput'}
    label={'Input with Custom Validations'}
    validate={[
      (val) => val !== 'example' 
        ? 'Value must be `example`' 
        : undefined
    ]}
  />
  <FieldInput 
    disabled
    name={'disabledInput'}
    label={'Disabled Input'}
  />
  <FieldInput 
    name={'textareaInput'}
    label={'Textarea Input'}
    tag={'textarea'}
  />
</ExampleForm>
```
