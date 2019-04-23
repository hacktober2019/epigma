// @flow

import {
  CHANGE_EDITOR_DOCUMENT,
  CHANGE_MODE,
  OPEN_DOCUMENT,
  REDO,
  SET_SELECTED_SHAPES,
  UNDO
} from "./actionTypes"

export const changeMode = (mode: "VIEW" | "EDIT" | "CREATE") => ({
  type: CHANGE_MODE,
  mode
})

export const setSelectedShapes = selectedShapes => ({
  type: SET_SELECTED_SHAPES,
  selectedShapes
})

export const openDocumentInEditor = document => ({
  type: OPEN_DOCUMENT,
  payload: { document }
})

export const changeEditorDocument = document => ({
  type: CHANGE_EDITOR_DOCUMENT,
  payload: { document }
})

export const editorUndo = () => ({
  type: UNDO
})

export const editorRedo = () => ({
  type: REDO
})
