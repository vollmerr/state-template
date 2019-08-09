```jsx
import { FieldFile, file } from 'state-template';

const downloadButton = {
  text: 'download `File`',
  onClick: (values) => {
    if (values.file) {
      file.saveFile(values.file, values.file.name);
    }
  },
};

// example `ref`, access using inputRef.current
// this will be used internally instead of the displayRef
const inputRef = React.createRef();

<ExampleForm form={'file'} customButton={downloadButton} inputRef={inputRef}>
  <FieldFile
    name={'file'}
    label={'File'}
    helpText={'This is the `helpText` content...'}
    onChange={(value) => { console.log('changing...', value) }}
    onBlur={(value) => { console.log('blurring...', value) }}
    onFocus={(value) => { console.log('focusing...', value) }}
    accept={'.jpg, .jpeg, .png'}
    placeholder={'Custom Placeholder...'}
    btnText={'Custom Button Text'}
    tooltip={'Example tooltip!'}
    inputRef={inputRef}
  />
  <FieldFile 
    required
    name={'requiredFile'}
    label={'Required File'}
  />
  <FieldFile 
    disabled
    name={'disabledFile'}
    label={'Disabled File'}
  />
  <FieldFile
    multiple
    name={'multipleFile'}
    label={'Multiple Files'}
  />
</ExampleForm>
```
