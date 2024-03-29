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
export async function downloadSandwichImage(sandwichPayload: SandwichPayload) {
  try {
    const response = await paniniAPI.post('', {
      ...sandwichPayload,
    })

    const imageUrl = response.data.imageUrl

    const saveImg = document.createElement('a')
    saveImg.href = imageUrl
    saveImg.download = sandwichPayload.sandwichName + '.png'
    saveImg.target = '_blank'

    document.body.appendChild(saveImg)
    saveImg.click()

    document.body.removeChild(saveImg)
  } catch (error) {
    console.log('error', error)
  }
}
