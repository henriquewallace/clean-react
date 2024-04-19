import { faker } from '@faker-js/faker'
import { HttpPostParams } from '../protocols/http/http-post-client'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.objectEntry({ anyKey: 'any_value' })
})
