import { CloudUploadOutlined } from '@ant-design/icons';
import { useToast } from '@chakra-ui/react';
import type { UploadProps } from 'antd';
import { Upload } from 'antd';
import "./Submit.css";

const { Dragger } = Upload;
const SubmitForm = () => {

    const toast = useToast()
    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://63dba442c45e08a0434a2988.mockapi.io/items',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                toast({
                    title: 'Done!.',
                    position: "bottom-right",
                    description: `${info.file.name} file uploaded successfully.`,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            } else if (status === 'error') {
                console.log(info)
                toast({
                    title: 'Failed.',
                    position: "bottom-right",
                    description: `${info.file.name} file upload failed.`,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };


    return (
        <div className="submit-inputs">
            <p className='submit-title'>Submit your data labeling (format Guidelines)</p>
            <Dragger {...props}>
                <p className="ant-upload-text">Choose file</p>
                <p className="ant-upload-text" style={{ color: "gray", fontWeight: '300' }}>or drag and drop</p>
                <p className="ant-upload-drag-icon">
                    <CloudUploadOutlined />
                </p>

            </Dragger>
        </div>
    )
}


export default SubmitForm;