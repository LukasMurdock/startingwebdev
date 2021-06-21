import React from 'react'

export default function Preview({
    children,
    background = 'dark:text-gray-800',
}) {
    return (
        <div
            data-preview
            className={`${background} rounded-lg callout mt-6 overflow-x-auto p-1`}
            style={{
                backgroundColor: 'rgba(247,237,237)',
                marginTop: '1.5rem',
                marginBottom: '0',
                overflowX: 'auto',
                padding: '1rem',
            }}
        >
            {children}
        </div>
    )
}
