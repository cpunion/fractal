import { REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT } from '../../actions/interfaceEditorComponents';
import { SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH } from '../../actions/interfaceEditorSelectedElementPath';
import { List } from 'immutable';

export const initialState = new List;

export default function interfaceEditorSelectedElementPath(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH:
      return action.selectedElementPath;

    // When user removes the selected element, select its parent (so to avoid
    // having a selected element that no longer exists)...
    case REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT:
      return state.equals(action.elementPath)
        ? action.elementPath.pop()
        : state;

    default:
      return state;
  }
}
