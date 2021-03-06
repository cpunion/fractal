/* global it, describe, expect, jest */
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorCanvasZoom');

import reducer, { initialState } from '../';
import {
  setInterfaceEditorCanvasZoom,
} from '../../../actions/interfaceEditorCanvasZoom';

describe('interfaceEditorCanvasZoom reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorCanvasZoom action creator', () => {
    const canvasZoom = {};

    expect(
      reducer(undefined, setInterfaceEditorCanvasZoom(canvasZoom))
    ).toEqual(canvasZoom);
  });
});
