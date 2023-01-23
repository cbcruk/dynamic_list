import {
  TARGET_KEYS_HOVER,
  TARGET_KEYS_PREV,
  TARGET_KEYS_NEXT,
  TARGET_DATASET_IS_SIBLINGS,
  TARGET_DATASET_IS_HOVER,
  TARGET_KEYS_SELECTED,
} from './constants'
import { TargetKey, MaybeHTMLElement } from './types'

class TargetManager {
  map = new Map<TargetKey, MaybeHTMLElement>([
    [TARGET_KEYS_HOVER, null],
    [TARGET_KEYS_PREV, null],
    [TARGET_KEYS_NEXT, null],
  ])

  setTarget = (...params: Parameters<typeof this.map.set>) => {
    this.map.set(...params)
  }

  clearTarget = () => {
    this.map.clear()
  }

  toggleSiblings = (status: boolean) => {
    const keys = [TARGET_KEYS_PREV, TARGET_KEYS_NEXT] as const

    keys.forEach((key) => {
      const target = this.map.get(key)
      const element = status && target ? target : null

      if (target) {
        this.setTarget(key, element)

        target.dataset[TARGET_DATASET_IS_SIBLINGS] = `${status}`
      }
    })
  }

  toggleHover = (status: boolean) => {
    const target = this.map.get(TARGET_KEYS_HOVER)
    const element = status && target ? target : null

    if (target) {
      target.dataset[TARGET_DATASET_IS_HOVER] = `${status}`
    }

    this.setTarget(TARGET_KEYS_HOVER, element)
  }

  toggleSelected = (status: boolean) => {
    const target = this.map.get(TARGET_KEYS_SELECTED)
    const element = status && target ? target : null

    if (target) {
      target.dataset.isSelected = `${status}`
    }

    this.setTarget(TARGET_KEYS_SELECTED, element)
  }
}

export const targetManager = new TargetManager()
