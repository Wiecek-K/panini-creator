import axios, { AxiosInstance } from 'axios'
import type { SandwichPayload } from '../types/SandwichPayload'

const PANINI_API_KEY = 'secret_token'

const paniniAPI: AxiosInstance = axios.create({
  baseURL: 'https://training.nerdbord.io/api/v1/panini-creator/order',
  headers: {
    'Content-Type': 'application/json',
    Authorization: PANINI_API_KEY,
  },
  timeout: 60000,
})
export async function sendPayload(sandwichPayload: SandwichPayload) {
  try {
    const response = await paniniAPI.post('', {
      ...sandwichPayload,
    })

    console.log(response.data)

    return response.data
    // as ImageResponse
  } catch (error) {
    console.log('error', error)
  }
}
