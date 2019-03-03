# @nju33/slack

[![github](https://badgen.net/badge//nju33,slack/000?icon=github&list=1)](https://github.com/nju33/slack)
[![npm:version](https://badgen.net/npm/v/@nju33/slack?icon=npm&label=)](https://www.npmjs.com/package/@nju33/slack)
[![ci:status](https://badgen.net/circleci/github/nju33/slack)](https://circleci.com/gh/nju33/slack)
[![document:typedoc](https://badgen.net/badge/document/typedoc/9602ff)](https://nju33--slack.netlify.com/)
[![license](https://badgen.net/npm/license/vwxy)](https://github.com/nju33/vwxy/blob/master/LICENSE)
[![code style: prettier](https://badgen.net/badge//prettier/ff69b3?label=code%20style)](https://github.com/prettier/prettier)
[![typescript](https://badgen.net/badge/lang/typescript/0376c6)](https://www.typescriptlang.org/)

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
