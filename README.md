# @nju33/slack

## Install

```bash
yarn add @nju33/slack
```

## Usage

```ts
import {useMessage} from '@nju33/slack';

const {message, updateText, useAsUser, useAttachment} = useMessage('text');

updateText(text => `update-${text}`);
useAsUser(true);
const {useTitle} = useAttachment('callbackId');
useTitle('title of the attachment');

const json = message.export(true);
//
// {
//   title: 'update-text',
//   as_user: true,
//   attachments: [
//     {
//       title: 'title of the attachment'
//     }
//   ]
// }
//
```