import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamName } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']

    for (const field of requiredFields) {
      if (!httpRequest?.body[field]) {
        return badRequest(new MissingParamName(field))
      }
    }
  }
}
