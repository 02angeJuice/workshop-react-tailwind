import axios from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_EMAILJS_ENDPOINT, //ลิ้ง api
})

// Send
export const emailjsSend = async (data) => {
  try {
    const result = await instance.post(`/send`, data)
    return { status: true, data: result?.data }
  } catch (error) {
    throw { status: false, data: error?.response?.data }
  }
}
