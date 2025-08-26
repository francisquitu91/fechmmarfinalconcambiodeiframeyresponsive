export interface ServiceType {
  value: string;
  label: string;
}

export interface PhoneInputProps {
  onChange: (phone: string) => void;
  value: string;
}

export interface Country {
  code: string;
  name: string;
  dialCode: string;
}