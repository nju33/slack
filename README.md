# @nju33/slack

## Install

```bash
yarn add @nju33/slack
```

## Usage

```ts
import {useChat} from '@nju33/slack';

const {json, updateText, useAttachment} = useChat('postMessage', 'text');
updateText(text => `update-${text}`);
const {useTitle, useButton} = useAttachment('callback_id');
useTitle('title');
useButton('button name', 'button text', 'button value');

fetch(responseURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(json()),
});
//
// {
//   title: 'update-text',
//   attachments: [
//     {
//       callback_id: 'callback_id',
//       title: 'title',
//       actions: [
//        {
//          type: 'button',
//          name: 'button name',
//          text: 'button text',
//          value: 'button value',
//        }
//      ],
//     },
//   ]
// }
//
```
