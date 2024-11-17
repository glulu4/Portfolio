import React from 'react';
// import Image from 'next/image';

interface IconProps {
    altText?: string; // Optional alt text for accessibility
    onClick?: () => void; // Optional click handler
    className?: string; // Optional class for styling
}

const TableauIcon: React.FC<IconProps> = ({altText = 'Icon', onClick, className}) => {
    return (
        <div
            className={`icon-wrapper ${className || ''}`}
            onClick={onClick}
            style={{
                width: '48px',
                height: '48px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: onClick ? 'pointer' : 'default',
            }}
        >
            <img
                src="/tableau-icon.png" // Replace with the correct path to your image
                alt={altText}
                width={48}
                height={48}
            />
        </div>
    );
};

export default TableauIcon;
