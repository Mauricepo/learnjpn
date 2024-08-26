import axios, { AxiosError, AxiosResponse } from 'axios'

const baseURL: string = 'https://jsonblob.com/api/1277702707279159296'

export const requestData: () => Promise<any> = async (): Promise<any> =>
  axios
    .request({
      baseURL
    })
    .then((response: AxiosResponse<any>) => {
      return response.data
    })
    .catch((error) => handleError(error))

export const handleError: (error: AxiosError) => never = (error: AxiosError): never => {
  const statusCode = error.response?.status
  const statusText = error.response?.statusText
  const errorMessage = error.message

  console.error('Error occurred:', {
    statusCode,
    statusText,
    errorMessage,
    responseData: error.response?.data,
    request: error.request
  })

  throw new Error(`An error occurred while making the request: ${statusText || 'Unknown error'}`)
}
