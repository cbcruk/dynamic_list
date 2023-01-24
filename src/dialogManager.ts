import { DialogStatus } from './types'

export class DialogManager {
  dialog = document.querySelector<HTMLElement>('[data-dialog]')

  toggleModal = (status: DialogStatus, _content?: string) => {
    if (!this.dialog) {
      return
    }

    this.dialog.dataset.status = status
  }
}
