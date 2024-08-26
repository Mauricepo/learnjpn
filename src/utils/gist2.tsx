import axios, { AxiosError, AxiosResponse } from 'axios'

const baseURL: string = 'https://jsonblob.com/api/1277702707279159296'

export const sendData: (newData: any) => Promise<any> = async (newData: JSON): Promise<any> =>
  axios
    .put(baseURL, newData)
    .then((response: AxiosResponse<any>) => {
      return true
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
