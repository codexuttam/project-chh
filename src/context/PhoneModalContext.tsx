import React, { createContext, useContext, useState } from "react";
import PhoneModal from "../components/PhoneModal";
import GetQuoteModal from "../components/GetQuoteModal";

interface PhoneModalContextType {
  openPhoneModal: () => void;
  closePhoneModal: () => void;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}

const PhoneModalContext = createContext<PhoneModalContextType | undefined>(undefined);

export const PhoneModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <PhoneModalContext.Provider
      value={{
        openPhoneModal: () => setIsPhoneOpen(true),
        closePhoneModal: () => setIsPhoneOpen(false),
        openQuoteModal: () => setIsQuoteOpen(true),
        closeQuoteModal: () => setIsQuoteOpen(false)
      }}
    >
      {children}
      <PhoneModal
        isOpen={isPhoneOpen}
        onClose={() => setIsPhoneOpen(false)}
        onOpenQuoteModal={() => setIsQuoteOpen(true)}
      />
      <GetQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </PhoneModalContext.Provider>
  );
};

export const usePhoneModal = () => {
  const context = useContext(PhoneModalContext);
  if (!context) {
    throw new Error("usePhoneModal must be used within a PhoneModalProvider");
  }
  return context;
};
