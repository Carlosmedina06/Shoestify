export const fileUpload = async (file) => {
  const cloudinaryUrl = `process.env.REACT_APP_CLOUDINARY_URL`

  const formData = new FormData()

  formData.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_PRESET}`)
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
