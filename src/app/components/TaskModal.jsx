import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Import the Lucide "X" icon

const TaskModal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
          >
            <button className="modal-close" onClick={onClose}>
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
