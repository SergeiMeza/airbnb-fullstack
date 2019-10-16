import React from 'react'
import { FieldProps } from 'formik'
import { Upload, Icon, message } from 'antd'
import DropZone from 'react-dropzone'

export const DropZoneField: React.FunctionComponent<FieldProps<any>> = ({
  field: { name },
  form: { setFieldValue },
  ...props
}) => {
  return (
    <DropZone
      accept='image/jpeg, image/png'
      multiple={false}
      onDrop={([file]) => {
        setFieldValue(name, file)
      }}
      {...props}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </DropZone>
  )
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG files!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

export const UploadField: React.FunctionComponent<FieldProps<any>> = ({
  field: { name },
  form: { setFieldValue },
  ...props
}) => {
  const [state, setState] = React.useState({ loading: false, imageUrl: '' } as {
    loading: boolean
    imageUrl: string | null
  })

  function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setState({
        imageUrl: null,
        loading: true,
      })
      return
    }
    if (info.file.status === 'done') {
      setFieldValue(name, info.file)
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setState({
          imageUrl,
          loading: false,
        }),
      )
    }
  }

  const uploadButton = (
    <div>
      <Icon type={state.loading ? 'loading' : 'plus'} />
      <div className='ant-upload-text'>Upload</div>
    </div>
  )
  const { imageUrl } = state
  return (
    <Upload
      name='media'
      listType='picture-card'
      className='avatar-uploader'
      showUploadList={false}
      action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
  )
}
