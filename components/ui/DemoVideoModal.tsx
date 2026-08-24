'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import { Youtube } from '@/components/social-icons/icons'

interface DemoVideoModalProps {
  src: string
  title: string
}

const DemoVideoModal = ({ src, title }: DemoVideoModalProps) => {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const onToggle = () => {
    setShow((status) => {
      if (status) {
        enableBodyScroll(containerRef.current)
      } else {
        // Prevent scrolling
        disableBodyScroll(containerRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <button aria-label={`Demo video of ${title}`} onClick={onToggle}>
        <Youtube className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 fill-current text-black dark:text-white" />
      </button>
      {mounted && (
        <Transition appear show={show} as={Fragment} unmount={false}>
          <Dialog as="div" className="relative z-70" onClose={onToggle} unmount={false}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              unmount={false}
            >
              <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
            </TransitionChild>

            <div ref={containerRef} className="fixed inset-0 flex items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                unmount={false}
              >
                <DialogPanel className="relative w-full max-w-5xl">
                  <video
                    src={src}
                    className="max-h-[85vh] w-full rounded-md bg-black"
                    controls
                    autoPlay
                    preload="auto"
                  >
                    <track kind="captions" />
                  </video>
                  <button
                    className="absolute -top-10 right-0 text-white transition hover:text-gray-300"
                    aria-label="Close demo video"
                    onClick={onToggle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L10 11.414 8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  )
}

export default DemoVideoModal
