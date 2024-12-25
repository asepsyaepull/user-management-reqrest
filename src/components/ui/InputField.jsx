import React from 'react';

const InputField = ({ icon, endIcon, type, name, placeholder, value, onChange }) => {
    return (
        <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {icon}
            </div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"
            />
            {endIcon && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {endIcon}
                </div>
            )}
        </div>
    );
};

export default InputField;