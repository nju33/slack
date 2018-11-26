import {useDialog} from './use-dialog';

describe('useDialog', () => {
  const dialog = () => useDialog('triggerId', 'callbackId', 'title');

  test('returns', () => {
    const {
      json,
      updateCallbackId,
      updateTitle,
      setState,
      setSubmitLabel,
      setNotifyOnCancel,
      useSelectElement,
      useTextElement,
      useTextareaElement,
    } = dialog();

    expect(json).toBeInstanceOf(Function);
    expect(updateCallbackId).toBeInstanceOf(Function);
    expect(updateTitle).toBeInstanceOf(Function);
    expect(setState).toBeInstanceOf(Function);
    expect(setSubmitLabel).toBeInstanceOf(Function);
    expect(setNotifyOnCancel).toBeInstanceOf(Function);
    expect(useSelectElement).toBeInstanceOf(Function);
    expect(useTextElement).toBeInstanceOf(Function);
    expect(useTextareaElement).toBeInstanceOf(Function);

    expect(json(false).triggerId).toBe('triggerId');
  });

  test('updateCallbackId', () => {
    const {json, updateCallbackId} = dialog();

    expect(json(false).dialog.callbackId).toBe('callbackId');
    updateCallbackId(callbackId => `updated-${callbackId}`);
    expect(json(false).dialog.callbackId).toBe('updated-callbackId');
  });

  test('updateTitle', () => {
    const {json, updateTitle} = dialog();

    expect(json(false).dialog.title).toBe('title');
    updateTitle(title => `updated-${title}`);
    expect(json(false).dialog.title).toBe('updated-title');
  });

  test('setState', () => {
    const {json, setState} = dialog();

    expect(json(false).dialog.state).toBeUndefined();
    setState('state');
    expect(json(false).dialog.state).toBe('state');
  });

  test('setSubmitLabel', () => {
    const {json, setSubmitLabel} = dialog();

    expect(json(false).dialog.submitLabel).toBeUndefined();
    setSubmitLabel('submitLabel');
    expect(json(false).dialog.submitLabel).toBe('submitLabel');
  });

  test('setNotifyOnCancel', () => {
    const {json, setNotifyOnCancel} = dialog();

    expect(json(false).dialog.notifyOnCancel).toBeUndefined();
    setNotifyOnCancel(true);
    expect(json(false).dialog.notifyOnCancel).toBeTruthy();
  });

  test('build', () => {
    const aDialog = {
      callbackId: 'callbackId',
      title: 'title',
      elements: [
        {
          type: 'text',
          label: 'text-label',
          name: 'text-name',
          value: 'text-value',
        },
        {
          type: 'textarea',
          label: 'textarea-label',
          name: 'textarea-name',
          value: 'textarea-value',
        },
        {
          type: 'select',
          label: 'select-label1',
          name: 'select-name1',
          selectedOptions: [{value: 'value0'}],
          options: [
            {
              label: 'label0',
              value: 'value0',
            },
            {
              label: 'label1',
              value: 'value1',
            },
          ],
        },
        {
          type: 'select',
          label: 'select-label2',
          name: 'select-name2',
          optionGroups: [
            {
              label: 'label0',
              options: [
                {
                  label: 'label0',
                  value: 'value0',
                },
                {
                  label: 'label1',
                  value: 'value1',
                },
              ],
            },
            {
              label: 'label1',
              options: [
                {
                  label: 'label2',
                  value: 'value2',
                },
                {
                  label: 'label3',
                  value: 'value3',
                },
              ],
            },
          ],
        },
        {
          type: 'select',
          label: 'select-label2',
          name: 'select-name2',
          dataSource: 'users',
        },
      ],
    };

    const {
      json,
      useTextElement,
      useTextareaElement,
      useSelectElement,
    } = dialog();

    (() => {
      const e0 = aDialog.elements[0] as Record<
        'label' | 'name' | 'value',
        string
      >;
      useTextElement(e0.label, e0.name, e0.value);
    })();

    (() => {
      const e1 = aDialog.elements[1] as Record<
        'label' | 'name' | 'value',
        string
      >;
      useTextareaElement(e1.label, e1.name, e1.value);
    })();

    (() => {
      const e2 = aDialog.elements[2];
      const {useSelectedOption, useOption} = useSelectElement(
        e2.label,
        e2.name,
      );

      (e2 as any).selectedOptions.forEach((selectedOption: any) => {
        useSelectedOption(selectedOption.value);
      });

      (e2 as any).options.forEach((option: any) => {
        useOption(option.label, option.value);
      });
    })();

    (() => {
      const e3 = aDialog.elements[3];
      const {useOptionGroup} = useSelectElement(e3.label, e3.name);

      (e3 as any).optionGroups.forEach((optionGroup: any) => {
        const {useOption} = useOptionGroup(optionGroup.label);

        optionGroup.options.forEach(
          (option: Record<'label' | 'value', string>) => {
            useOption(option.label, option.value);
          },
        );
      });
    })();

    (() => {
      const e4 = aDialog.elements[4];
      const {setDataSource} = useSelectElement(e4.label, e4.name);
      setDataSource('users');
    })();

    expect(json(false).dialog).toMatchObject(aDialog);
  });
});
