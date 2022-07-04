import React, { useState } from 'react'
import Modal from './Modal'
import Image from './Image'

const Card = ({ data }: any) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [tempData, setTempData] = useState<any>(null)
    const title: string = data?.name.replace(/\b\w/g, (c: string) => c.toUpperCase());
    const getData = (data: any) => {
        setTempData(data)
        setShowModal(true)
    }
    return (
        <div className="card" style={{ width: '18rem' }}>
            <Image id={data?.id} name={title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{data?.id}. {title}</h5>
                <p className="card-text"></p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onClick={() => getData(data)}>
                    Show Statics
                </button>
            </div>
            {
                showModal ?
                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <Modal data={tempData} show={setShowModal} />
                    </div>
                    : null
            }
        </div>
    )
}

export default Card