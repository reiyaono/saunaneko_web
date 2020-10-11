import axios from 'axios'

const apiServer = 'http://localhost:3000'

export const apiPost = async (context, url, params, options = {}, requireAuth = true) => {
  console.log(requireAuth)
  const opt = {} // await getCommonOption(context, requireAuth)
  const response = await axios.post(`${apiServer}/api/v1/${url}`, params, Object.assign(opt, options))
  return response.data
}

export const postResult = async (context) => {
  const params = new URLSearchParams()
  const answers = this.$store.state.answers
  Object.keys(answers).forEach(v => {
    params.append(v, answers[v])
  })
  return apiPost(context, 'result', params).then(() => {
  })
}
