```jsx
import { Button, Form, FieldInput } from 'state-template';

<Form 
  enableReinitialize
  form={'exampleFormName'}
  onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
>
  <FieldInput name={'exampleFormInput'} label={'Example Input'} />
  <Button type={'submit'} variant={'primary'} text={'Submit'} />
</Form>
```
