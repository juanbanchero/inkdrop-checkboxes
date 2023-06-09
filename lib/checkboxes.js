'use babel';

import CheckboxesMessageDialog from './checkboxes-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(CheckboxesMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'CheckboxesMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'CheckboxesMessageDialog'
    )
    inkdrop.components.deleteClass(CheckboxesMessageDialog);
  }

};
