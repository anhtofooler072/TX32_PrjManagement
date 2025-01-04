import React from 'react';
import { motion } from 'framer-motion';

const CreateProjectModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative z-60 bg-white p-6 rounded-lg shadow-md"
                    >
                        <h2 className="text-lg font-semibold mb-4">Create New Project</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Project Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    className="mt-1 p-2 w-full border rounded-md"
                                ></textarea>
                            </div>
                            {/* Add more form fields here */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default CreateProjectModal;