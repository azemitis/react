import React from 'react';

type IconButtonProps = {
    icon: string;
    label: string;
    onClick: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
            shadow-sm text-white bg-yellow-900 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-yellow-800"
        >
      <span className="mr-2">
        <i className={`fas ${icon}`} />
      </span>
            {label}
        </button>
    );
};

export default IconButton;
