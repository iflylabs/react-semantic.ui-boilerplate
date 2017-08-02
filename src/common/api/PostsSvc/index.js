import {get} from 'api/utils'

export async function getPostsAPI () {
  return get('http://localhost:4000/api/v2/tasks')
}
