import React, { createContext, useContext, useState } from "react";
import PhoneModal from "../components/PhoneModal";
import GetQuoteModal from "../components/GetQuoteModal";
import EmailModal from "../components/EmailModal";

interface PhoneModalContextType {
  openPhoneModal: () => void;
  closePhoneModal: () => void;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  openEmailModal: () => void;
  closeEmailModal: () => void;
}

const PhoneModalContext = createContext<PhoneModalContextType | undefined>(undefined);

export const PhoneModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  return (
    <PhoneModalContext.Provider
      value={{
        openPhoneModal: () => setIsPhoneOpen(true),
        closePhoneModal: () => setIsPhoneOpen(false),
        openQuoteModal: () => setIsQuoteOpen(true),
        closeQuoteModal: () => setIsQuoteOpen(false),
        openEmailModal: () => setIsEmailOpen(true),
        closeEmailModal: () => setIsEmailOpen(false)
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
      <EmailModal
        isOpen={isEmailOpen}
        onClose={() => setIsEmailOpen(false)}
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
