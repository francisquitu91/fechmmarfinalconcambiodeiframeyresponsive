import { useState } from 'react';
import { countries } from './data/countries';
import { PhoneInputProps } from './types';

export const PhoneInput = ({ onChange, value }: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].dialCode);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    const phoneNumber = value.replace(/^\+\d+/, '').replace(/\D/g, '');
    updatePhone(e.target.value, phoneNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value.replace(/\D/g, '');
    updatePhone(selectedCountry, phoneNumber);
  };

  const updatePhone = (countryCode: string, number: string) => {
    onChange(number ? `${countryCode}${number}` : '');
  };

  // Extract the phone number without country code for display
  const displayNumber = value.replace(new RegExp(`^\\${selectedCountry}`), '');

  return (
    <div className="flex gap-2">
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-32 px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.dialCode}>
            {country.name} ({country.dialCode})
          </option>
        ))}
      </select>
      
      <input
        type="tel"
        value={displayNumber}
        onChange={handlePhoneChange}
        placeholder="912345678"
        className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};