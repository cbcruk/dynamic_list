import { DIALOG_STATUS, TARGET_KEYS } from './constants'

export type MaybeHTMLElement = HTMLElement | null

export type TargetKey = keyof typeof TARGET_KEYS

export type DialogStatus = keyof typeof DIALOG_STATUS
