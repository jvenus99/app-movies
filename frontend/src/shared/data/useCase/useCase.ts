export default interface UseCase<ParamsType, ReturnType> {
  isValid?: (params: ParamsType) => Promise<boolean> | boolean
  execute: (params: ParamsType) => ReturnType
}
