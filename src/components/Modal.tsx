import React, { useEffect, useState } from 'react'
import Image from './Image'

interface ModalProps {
    data: any;
    show: any;
}

const Modal = ({ data, show }: ModalProps) => {
    const [state, setState] = useState<any>(data)
    console.log(state)
    useEffect(() => {
        setState(data)
        return () => {
            setState(null)
        }
    })
    return (
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{state?.id}. <span className='c-t'>{state?.name}</span></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => show(false)} ></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex justify-content-start'>

                        <Image id={state.id} name={state.name} />
                        <div style={{ width: '100%' }}>
                            <h4>Statistics</h4>
                            <div>
                                {state?.stats.map((item: any, index: number) =>
                                    <div key={index}>
                                        <span><b className='c-t'>{item.stat.name}:</b> {item.base_stat}</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-success" style={{ width: `${item.base_stat}%` }} role="progressbar" ></div>
                                        </div>
                                    </div>

                                )}
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal