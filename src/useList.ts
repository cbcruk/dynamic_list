import {
  TARGET_KEYS_PREV,
  TARGET_KEYS_NEXT,
  TARGET_KEYS_HOVER,
  TARGET_KEYS_SELECTED,
  DIALOG_STATUS_SHOW,
} from './constants'
import { dialogManager, targetManager } from './main'
import { MaybeHTMLElement } from './types'

function getSiblingElements(target: HTMLElement) {
  const prev = target.previousElementSibling as MaybeHTMLElement
  const next = target.nextElementSibling as MaybeHTMLElement

  return {
    prev,
    next,
  }
}

function handleMouseOver(e: MouseEvent) {
  const target = e.target as HTMLElement
  const isListItem = target.dataset.listItem !== undefined

  if (!isListItem) {
    return
  }

  targetManager.toggleSiblings(false)
  targetManager.toggleHover(false)
  targetManager.clearTarget()

  const { prev, next } = getSiblingElements(target)

  targetManager.setTarget(TARGET_KEYS_PREV, prev)
  targetManager.setTarget(TARGET_KEYS_NEXT, next)
  targetManager.setTarget(TARGET_KEYS_HOVER, target)

  targetManager.toggleSiblings(true)
  targetManager.toggleHover(true)
}

function handleClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  const isItem = target.dataset.isHover

  if (isItem) {
    targetManager.setTarget(TARGET_KEYS_SELECTED, target)
    targetManager.toggleSelected(true)

    dialogManager.toggleModal(DIALOG_STATUS_SHOW)
  }
}

export function useList() {
  document.body.addEventListener('mouseover', handleMouseOver)
  document.body.addEventListener('click', handleClick)
}
