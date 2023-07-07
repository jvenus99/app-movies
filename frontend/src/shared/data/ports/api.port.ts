import { HttpRequest, HttpResponse } from '../../domain/enities/api'

export interface ApiPort<
  RequestBody = unknown,
  ResponseBody = unknown,
  ResponseHeaders = unknown
> {
  request(
    httpRequest: HttpRequest<RequestBody>
  ): Promise<HttpResponse<ResponseBody, ResponseHeaders>>
}
