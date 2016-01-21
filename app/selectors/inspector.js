import { createSelector } from 'reselect';
import { elementByElementPath } from './tree';

function inspector(state) {
  return state.inspector;
}

export const routeStack = createSelector(
  inspector,
  (inspectorState) => inspectorState.routeStack,
);

export const currentRoute = createSelector(
  routeStack,
  (routeStackState) => routeStackState.last(),
);

export const previousRoute = createSelector(
  routeStack,
  (routeStackState) => routeStackState.get(-2),
);

export const selectedElementPath = createSelector(
  currentRoute,
  (currentRouteState) => currentRouteState.props.elementPath,
);

export function selectedElement(state) {
  const selectedElementPathState = selectedElementPath(state);
  const selectedElementState = elementByElementPath(selectedElementPathState)(state);

  return selectedElementState;
}

export function selectedElementTitle(state) {
  const selectedElementState = selectedElement(state);

  return selectedElementState.displayName || selectedElementState.type.displayName;
}
