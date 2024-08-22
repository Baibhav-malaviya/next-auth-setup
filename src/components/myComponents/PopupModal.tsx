import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

const PopupModal = ({ children, isOpen, onClose }: ModalProps) => {
	return (
		<Transition show={isOpen} as={React.Fragment}>
			<Dialog as="div" className="relative z-50" onClose={onClose}>
				{/* Background overlay */}
				<Transition.Child
					as={React.Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={React.Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-lg transition-all">
								<div className="flex justify-between items-center">
									{/* Placeholder for Modal Title or Left aligned content */}
									<div className="text-lg font-medium leading-6 text-gray-900">
										{/* You can insert a title or keep it empty */}
									</div>
									<button
										type="button"
										className="rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
										onClick={onClose}
										aria-label="Close"
									>
										<X className="h-5 w-5" />
									</button>
								</div>
								<div className="mt-4">{children}</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default PopupModal;
