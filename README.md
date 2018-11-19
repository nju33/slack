# @nju33/slack

## Install

```bash
yarn add @nju33/slack
```

## Usage

```ts
import {useMessage} from '@nju33/slack';

const {message, updateText, setAsUser, useAttachment} = useMessage('text');

updateText(text => `update-${text}`);
setAsUser(true);
const {setTitle} = useAttachment('callbackId');
setTitle('title of the attachment');

const json = message.export(true);
//
// {
//   title: 'update-text',
//   as_user: true,
//   attachments: [
//     {
//       callback_id: 'callbackId',
//       title: 'title of the attachment'
//     }
//   ]
// }
//
```
