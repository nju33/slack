import {Chat} from '../structs/slack';
import {useAttachment} from './use-attachment';

describe('useAttachment', () => {
  let chat: Chat;
  const attachment = () => useAttachment(chat)('callbackId');

  beforeEach(() => {
    chat = new Chat();
    chat.setText('text');
  });

  test('returns with Chat', () => {
    const handler = attachment();

    expect((handler as any).json).not.toBeInstanceOf(Function);
    expect(handler.updateText).toBeInstanceOf(Function);
    expect(handler.setFallback).toBeInstanceOf(Function);
    expect(handler.setColor).toBeInstanceOf(Function);
    expect(handler.setPretext).toBeInstanceOf(Function);
    expect(handler.setAuthorName).toBeInstanceOf(Function);
    expect(handler.setAuthorLink).toBeInstanceOf(Function);
    expect(handler.setAuthorIcon).toBeInstanceOf(Function);
    expect(handler.setTitle).toBeInstanceOf(Function);
    expect(handler.setTitleLink).toBeInstanceOf(Function);
    expect(handler.setImageUrl).toBeInstanceOf(Function);
    expect(handler.setThumbUrl).toBeInstanceOf(Function);
    expect(handler.setFooter).toBeInstanceOf(Function);
    expect(handler.setFooterIcon).toBeInstanceOf(Function);
    expect(handler.setTs).toBeInstanceOf(Function);
    expect(handler.setAttachmentType).toBeInstanceOf(Function);
    expect(handler.useField).toBeInstanceOf(Function);
    expect(handler.useButton).toBeInstanceOf(Function);
    expect(handler.useSelect).toBeInstanceOf(Function);
    expect(handler.useListener).toBeInstanceOf(Function);

    expect(Array.isArray(chat.attachments)).toBeTruthy();
  });

  test('returns', () => {
    const handler = useAttachment('callbackId');

    expect(handler.json).toBeInstanceOf(Function);
    expect(handler.updateText).toBeInstanceOf(Function);
    expect(handler.setFallback).toBeInstanceOf(Function);
    expect(handler.setColor).toBeInstanceOf(Function);
    expect(handler.setPretext).toBeInstanceOf(Function);
    expect(handler.setAuthorName).toBeInstanceOf(Function);
    expect(handler.setAuthorLink).toBeInstanceOf(Function);
    expect(handler.setAuthorIcon).toBeInstanceOf(Function);
    expect(handler.setTitle).toBeInstanceOf(Function);
    expect(handler.setTitleLink).toBeInstanceOf(Function);
    expect(handler.setImageUrl).toBeInstanceOf(Function);
    expect(handler.setThumbUrl).toBeInstanceOf(Function);
    expect(handler.setFooter).toBeInstanceOf(Function);
    expect(handler.setFooterIcon).toBeInstanceOf(Function);
    expect(handler.setTs).toBeInstanceOf(Function);
    expect(handler.setAttachmentType).toBeInstanceOf(Function);
    expect(handler.useField).toBeInstanceOf(Function);
    expect(handler.useButton).toBeInstanceOf(Function);
    expect(handler.useSelect).toBeInstanceOf(Function);
    expect(handler.useListener).toBeInstanceOf(Function);

    handler.updateText(() => 'updated text');
    expect(handler.json(false)).toMatchObject({
      callbackId: 'callbackId',
      text: 'updated text'
    });
  });

  test('build actions', () => {
    const {useButton, useSelect} = attachment();

    const attachments = [
      {
        callbackId: 'callbackId',
        actions: [
          {
            type: 'button',
            name: 'name1',
            text: 'text1',
            value: 'value1'
          },
          {
            type: 'select',
            name: 'name2',
            text: 'text2',
            selectedOptions: [
              {
                value: 1
              }
            ],
            options: [
              {
                text: 'label1',
                value: 'value1'
              },
              {
                text: 'label2',
                value: 'value2'
              }
            ]
          },
          {
            type: 'select',
            name: 'name3',
            text: 'text3',
            optionGroups: [
              {
                text: 'label1',
                options: [
                  {
                    text: 'label1-1',
                    value: 'value1-1'
                  },
                  {
                    text: 'label1-2',
                    value: 'value1-2'
                  }
                ]
              },
              {
                text: 'label2',
                options: [
                  {
                    text: 'label2-1',
                    value: 'value2-1'
                  },
                  {
                    text: 'label2-2',
                    value: 'value2-2'
                  }
                ]
              }
            ]
          },
          {
            type: 'select',
            name: 'name4',
            text: 'text4',
            dataSource: 'users'
          }
        ]
      }
    ];

    const a0: any = attachments[0].actions[0];
    useButton(a0.name, a0.text, a0.value);

    (() => {
      const a1: any = attachments[0].actions[1];
      const {useSelectedOption, useOption} = useSelect(a1.name, a1.text);
      useSelectedOption(1);
      useOption('label1', 'value1');
      useOption('label2', 'value2');
    })();

    (() => {
      const a2: any = attachments[0].actions[2];
      const {useOptionGroup} = useSelect(a2.name, a2.text);

      [[1, 2], [1, 2]].forEach((pair, i) => {
        const {useOption} = useOptionGroup(`label${i + 1}`);

        pair.forEach(num => {
          useOption(`label${i + 1}-${num}`, `value${i + 1}-${num}`);
        });
      });
    })();

    (() => {
      const a3: any = attachments[0].actions[3];
      const {setDataSource} = useSelect(a3.name, a3.text);
      setDataSource('users');
    })();

    const result = chat.export(false);
    expect(result.attachments).toMatchObject(attachments);
  });
});
