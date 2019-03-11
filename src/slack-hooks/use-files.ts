import {Files} from '../structs/slack';

// tslint:disable-next-line:no-namespace
namespace UseFiles {
  export function fn(
    type: 'upload',
  ): {
    json: Files['export'];
    setToken: Files['setToken'];
    setChannels: Files['setChannels'];
    setContent: Files['setContent'];
    setFile: Files['setFile'];
    setFilename: Files['setFilename'];
    setFiletype: Files['setFiletype'];
    setInitialComment: Files['setInitialComment'];
    setThreadTs: Files['setThreadTs'];
    setTitle: Files['setTitle'];
  };

  export function fn(type: 'upload') {
    const files = new Files();

    switch (type) {
      case 'upload': {
        return {
          json: files.export.bind(files),
          setToken: files.setToken,
          setChannels: files.setChannels,
          setContent: files.setContent,
          setFile: files.setFile,
          setFilename: files.setFilename,
          setFiletype: files.setFiletype,
          setInitialComment: files.setInitialComment,
          setThreadTs: files.setThreadTs,
          setTitle: files.setTitle,
        };
      }
      default:
    }
  }
}

export const useFiles = UseFiles.fn;
