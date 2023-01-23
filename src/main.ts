import './style.css'
import { render } from './render'
import { useList } from './useList'
import { useDialog } from './useDialog'
import { TargetManager } from './targetManager'
import { DialogManager } from './dialogManager'

export const targetManager = new TargetManager()
export const dialogManager = new DialogManager()

render()
useList()
useDialog()
