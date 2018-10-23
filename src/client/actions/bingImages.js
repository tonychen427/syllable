export const LOAD_DATA = 'LOAD_DATA';

export function loadBingImages(payload) {
  return {
    type: LOAD_DATA,
    payload,
  };
}
