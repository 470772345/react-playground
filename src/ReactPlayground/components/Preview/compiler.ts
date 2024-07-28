import { transform } from '@babel/standalone'
import { Files } from '../../PlaygroundContext'
import { ENTRY_FILE_NAME } from '../../files'
import { PluginObj } from '@babel/core'

export const babelTransform = (filename: string, code: string, files: Files) => {
    let result = ''
    try {
      result = transform(code, {
        presets: ['react', 'typescript'],
        filename,
        plugins: [],
        retainLines: true
      }).code!
    } catch (e) {
      console.error('编译出错', e);
    }
    console.log('result',result)
    return result
  } 

  export const compile = (files: Files) => {
    const main = files[ENTRY_FILE_NAME]
    return babelTransform(ENTRY_FILE_NAME, main.value, files)
  }