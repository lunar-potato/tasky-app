import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Import the Lucide "X" icon

const TaskModal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="z-50 p-4 bg-white rounded shadow-md"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
          >
            <button
              className="absolute text-black hover:text-white top-2 right-2"
              onClick={onClose}
            >
              <X size={24} /> {/* Use the Lucide "X" icon */}
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TaskModal;
