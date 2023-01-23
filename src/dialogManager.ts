import { DialogStatus, MaybeHTMLElement } from './types'

class DialogManager {
  dialog: MaybeHTMLElement = document.querySelector('[data-dialog]')

  toggleModal = (status: DialogStatus, _content?: string) => {
    if (!this.dialog) {
      return
    }

    this.dialog.dataset.status = status
  }
}

export const dialogManager = new DialogManager()
