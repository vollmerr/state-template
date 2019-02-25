```jsx
import { ButtonRow } from 'state-template';

<ButtonRow>
  <Button text={'button'} />
  <Button text={'default button'} variant={'default'} />
  <Button text={'primary button'} variant={'primary'} />
  <Button text={'secondary button'} variant={'secondary'} />
  <Button text={'highlight button'} variant={'highlight'} />
  <Button text={'standout button'} variant={'standout'} />
</ButtonRow>
```

### active

```jsx
import { ButtonRow } from 'state-template';

<ButtonRow>
  <Button text={'button'} />
  <Button text={'default button'} variant={'default'} active />
  <Button text={'primary button'} variant={'primary'} active />
  <Button text={'secondary button'} variant={'secondary'} active />
  <Button text={'highlight button'} variant={'highlight'} active />
  <Button text={'standout button'} variant={'standout'} active />
</ButtonRow>
```

### disabled

```jsx
import { ButtonRow } from 'state-template';

<ButtonRow>
  <Button text={'button'} disabled />
  <Button text={'default button'} variant={'default'} disabled />
  <Button text={'primary button'} variant={'primary'} disabled />
  <Button text={'secondary button'} variant={'secondary'} disabled />
  <Button text={'highlight button'} variant={'highlight'} disabled />
  <Button text={'standout button'} variant={'standout'} disabled />
</ButtonRow>
```

### with icon

```jsx
import { ButtonRow } from 'state-template';

const iconProps = {
  name: 'plus-mark',
};

<ButtonRow>
  <Button text={'button'} iconProps={iconProps} />
  <Button text={'default button'} variant={'default'} iconProps={iconProps} />
  <Button text={'primary button'} variant={'primary'} iconProps={iconProps} />
  <Button text={'secondary button'} variant={'secondary'} iconProps={iconProps} />
  <Button text={'highlight button'} variant={'highlight'} iconProps={iconProps} />
  <Button text={'standout button'} variant={'standout'} iconProps={iconProps} />
</ButtonRow>
```

### passed props
Other properties get passed down to the button component, such as onChange handlers, id, etc.

```jsx
import { ButtonRow } from 'state-template';

<ButtonRow>
  <Button text={'click me'} onClick={() => alert('You Clicked Me!!')} variant={'default'} />
  <Button text={'other props'} id={'ButtonId'} style={{ fontSize: '20px' }} variant={'primary'} />
</ButtonRow>
```
