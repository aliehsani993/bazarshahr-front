export default function({ $axios, error: nuxtError }) {
  // Todo : Set this items
  $axios.setBaseURL('https://hekma.iran.liara.run/v1')
  $axios.setHeader('Access-Control-Allow-Origin', '*')
  $axios.setHeader('Device-Id', 'Device-Id')
  $axios.setHeader('Device-Name', 'Browser')
  $axios.setHeader('Platform-Version', 'Browser-Version')
  $axios.setHeader('Platform', 'Web')
  $axios.setHeader('Application-Version-Name', 'Application-Version-Name')
  $axios.setHeader('Application-Version-Code', 'Application-Version-Code')
  // $axios.setHeader('Application-Id', 'bazarshahr.dev')
  $axios.setHeader('Application-Type', 'Customer')
  $axios.setHeader('Accept', 'application/json')

  $axios.onError(error => {
    const { status } = error.response
    const errorData = error.response.data.error[0]
    switch (status) {
      case 403:
      case 404:
      case 429:
      case 400:
      case 500:
      case 503:
        return Promise.reject(errorData)
    }
  })
}
