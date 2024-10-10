/**
 *
 * @param obj in Json Format
 * return FormData
 */

export default function genrateFormData(obj: any) {
  const _FormData = new FormData();
  for (const item in obj) {
    _FormData.append(item, obj[item]);
  }
  return _FormData;
}
