// Example in a hook
import type { FieldHook } from 'payload';

export const extractExamId: FieldHook = ({ value }) => {
  if (typeof value === 'object' && value?.id) {
    return value.id; // return only the ID
  }
  return value;
};
