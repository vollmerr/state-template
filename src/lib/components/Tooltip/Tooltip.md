```jsx
<>
  <span data-for={'tooltip-example-2'} data-tip>Hover over me...</span>
  <Tooltip id={'tooltip-example-2'} text={'Example Tooltip...'} />
</>
```

### complex tooltip

```jsx
import { Button } from 'state-template';

<>
  <Button 
    data-tip
    data-for={'tooltip-example-3'}
    data-event={'click'}
    text={'click me!'}
    variant={'primary'}
  />

  <Tooltip id={'tooltip-example-3'} globalEventOff='click'>
    <div>
      <p>Example of complex tooltip...</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  </Tooltip>
</>
```
