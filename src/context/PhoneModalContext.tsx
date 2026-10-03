import React, { createContext, useContext, useState } from "react";
import PhoneModal from "../components/PhoneModal";
import EmailModal from "../components/EmailModal";
import GetQuoteModal from "../components/GetQuoteModal";

interface PhoneModalContextType {
  openPhoneModal: () => void;
  closePhoneModal: () => void;
  openEmailModal: () => void;
  closeEmailModal: () => void;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}

const PhoneModalContext = createContext<PhoneModalContextType | undefined>(undefined);

export const PhoneModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <PhoneModalContext.Provider
      value={{
        openPhoneModal: () => setIsPhoneOpen(true),
        closePhoneModal: () => setIsPhoneOpen(false),
        openEmailModal: () => setIsEmailOpen(true),
        closeEmailModal: () => setIsEmailOpen(false),
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
      <EmailModal
        isOpen={isEmailOpen}
        onClose={() => setIsEmailOpen(false)}
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
