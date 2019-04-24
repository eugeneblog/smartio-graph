import { observable } from 'mobx'

// menu菜单的数据
class MenuState {
    @observable menuList = [{
      'text': 'File',
      'overlay': 'fileMenu',
      'children': [{
        'text': 'New',
        'handle': 'newTabPanelHandle',
        'shortcutKey': 'Ctrl+N'
      }, {
        'text': 'Open From',
        'shortcutKey': 'Ctrl+O',
        'children': [{
          'text': 'device...',
          'handle': 'openFromDevice'
        }]
      }, {
        'text': 'Save',
        'shortcutKey': 'Ctrl+S',
        'handle': 'saveFileHandle'
      }, {
        'text': 'Save as...',
        'shortcutKey': 'Ctrl+Alt+S',
        'handle': 'saveAsHandle'
      }]
    }, {
      'text': 'Editor',
      'overlay': 'EditorMenu',
      'children': [{
        'text': 'undo',
        'handle': 'undoActionHandle',
        'shortcutKey': 'Ctrl+Z'
      }, {
        'text': 'redo',
        'handle': 'redoActionHandle',
        'shortcutKey': 'Ctrl+Alt+Z'
      }]
    }, {
        'text': 'View',
        'overlay': 'ViewMenu',
        'children': [{
          'text': 'Outline',
          'shortcutKey': 'Ctrl+Shift+P',
          'handle': 'showOutline',
          'isUse': false
        }, {
          'text': 'Layers',
          'shortcutKey': 'Ctrl+Shift+L',
          'handle': 'showLayers',
          'isUse': false
        }, {
          'text': 'Format Panel',
          'shortcutKey': 'Ctrl+Shift+O',
          'handle': 'showFormat',
          'isUse': false
        }]
    }, {
      'text': 'Help',
      'overlay': 'HelpMenu',
      'children': [{
        'text': 'Version',
        'shortcutKey': '0.0.1',
        'handle': 'showVersion',
        'isUse': false
      }]
    }]
}

let menustate = new MenuState()

export default menustate