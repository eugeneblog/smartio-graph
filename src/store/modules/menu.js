import { observable } from 'mobx'

class MenuState {
    @observable menuList = [{
        'text': 'file',
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
        'text': 'view',
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
    }]
}

let menustate = new MenuState()

export default menustate