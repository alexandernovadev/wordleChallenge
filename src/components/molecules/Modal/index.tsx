import React, { useEffect } from 'react'
import { contentModal, overlayModal } from './Classess'
import { ModalProps } from './Modal.type'

export const Modal = ({ children, isOpen, classNames = '' }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <section className={`${overlayModal} `}>
          <div className={`${contentModal} ${classNames} animate__animated animate__zoomIn animate__faster `}>{children}</div>
        </section>
      )}
    </>
  )
}
