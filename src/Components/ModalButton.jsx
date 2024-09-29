import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { IoClose } from "react-icons/io5";

export default function ModalButton({
  label,
  title,
  Content,
  Button,
  closeIcon,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Button to open modal */}
      {Button ? (
        <Button toggleModal={openModal} />
      ) : (
        <button className="pink-button" onClick={openModal}>
          {label}
        </button>
      )}

      {/* Modal */}
      <Transition show={isOpen}>
        <Dialog
          as="div"
          open={isOpen}
          transition
          className="z-[100] fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
          onClose={closeModal}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

          <div className="fixed inset-0 z-[100] overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel className="w-full max-w-md rounded-xl bg-white shadow-lg p-6">
                <div className="flex justify-between items-center">
                  {/* Title */}
                  <DialogTitle as="h3" className="font-semibold text-base">
                    {title}
                  </DialogTitle>
                  {/* Close Icon */}
                  {closeIcon && (
                    <IoClose
                      className="w-6 h-6 cursor-pointer"
                      onClick={closeModal}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="mt-4 z-[2050]">
                  <Content toggleModal={closeModal} setModalOpen={setIsOpen} />
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
