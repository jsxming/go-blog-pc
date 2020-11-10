
import {Modal} from 'antd';
export default function VModal({radius=20,visible,width,close,children}){
    return (
        <Modal
        title={null}
        footer={null}
        visible={visible}
        width={width}
        className='page_modal'
        maskClosable={false}
        bodyStyle={{padding:0}}
        onCancel={close}
     >
         {children}
         <style global jsx>{`
            .page_modal .ant-modal-content{
                border-radius:${radius}px;
                padding:0;
            }
        `}</style>
     </Modal>
    )
}