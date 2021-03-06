import { SET_INTERFACE_EDITOR_WORKSPACE_PANEL_MODAL_CONTENT } from '../../actions/interfaceEditorWorkspacePanelModalContent';
import initialState from './initialState';

export default function interfaceEditorWorkspacePanelModalContent(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_WORKSPACE_PANEL_MODAL_CONTENT:
      return action.modalContent;
    default:
      return state;
  }
}
