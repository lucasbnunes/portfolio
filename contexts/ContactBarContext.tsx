import React from "react";

type SocialMediaLinks = {
  github: string,
  linkedin: string,
}

interface ContactBarContext {
  socialMediaLinks: SocialMediaLinks,
  setSocialMediaLinks: (socialMediaLinks: SocialMediaLinks) => void
}

const ContactBarContext = React.createContext({} as ContactBarContext);

interface ContactBarContextProviderProps {
  children: React.ReactNode
}

export function ContactBarContextProvider({ children }: ContactBarContextProviderProps) {
  const [socialMediaLinks, setSocialMediaLinks] = React.useState<SocialMediaLinks>({ github: '', linkedin: '' })

  return <ContactBarContext.Provider value={{ socialMediaLinks: socialMediaLinks, setSocialMediaLinks }}>
    {children}
  </ContactBarContext.Provider>
}

export const useContactBarContext = () => React.useContext(ContactBarContext)