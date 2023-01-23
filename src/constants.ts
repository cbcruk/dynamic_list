export const TARGET_KEYS = {
  hover: 'hover',
  prev: 'prev',
  next: 'next',
  selected: 'selected',
} as const
export const TARGET_KEYS_PREV = TARGET_KEYS['prev']
export const TARGET_KEYS_NEXT = TARGET_KEYS['next']
export const TARGET_KEYS_HOVER = TARGET_KEYS['hover']
export const TARGET_KEYS_SELECTED = TARGET_KEYS['selected']

export const TARGET_DATASET = {
  isSiblings: 'isSiblings',
  isHover: 'isHover',
}
export const TARGET_DATASET_IS_SIBLINGS = TARGET_DATASET['isSiblings']
export const TARGET_DATASET_IS_HOVER = TARGET_DATASET['isHover']

export const DIALOG_STATUS = {
  show: 'show',
  hidden: 'hidden',
} as const
export const DIALOG_STATUS_SHOW = DIALOG_STATUS['show']
export const DIALOG_STATUS_HIDDEN = DIALOG_STATUS['hidden']
