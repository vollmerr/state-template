```jsx
const { file } = require('../../index');

const downloadButton = {
  text: 'download `File`',
  onClick: (values) => {
    if (values.file) {
      file.saveFile(values.file, values.file.name);
    }
  },
};

<ExampleForm form={'file'} customButton={downloadButton}>
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
