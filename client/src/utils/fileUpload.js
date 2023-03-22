const cloud_name = 'ddzjbp2i1'
const preset = 'nveytxo5'

export const fileUpload = async (file) => {
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

  const formData = new FormData()

  formData.append('upload_preset', preset)
  formData.append('file', file)

  try {
    const res = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) return null

    const data = await res.json()

    const imageUrls = data.secure_url

    return imageUrls
  } catch (error) {
    throw new Error(error.message)
  }
}
