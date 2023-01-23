import { TARGET_KEYS_SELECTED, DIALOG_STATUS_HIDDEN } from './constants'
import { dialogManager } from './dialogManager'
import { targetManager } from './targetManager'

function handleClickDim(e: MouseEvent) {
  const target = e.target as HTMLElement
  const isDim = target.dataset.dialog !== undefined

  if (isDim) {
    targetManager.toggleSelected(false)
    targetManager.setTarget(TARGET_KEYS_SELECTED, null)

    dialogManager.toggleModal(DIALOG_STATUS_HIDDEN)
  }
}

export function useDialog() {
  document.body.addEventListener('click', handleClickDim)
}
