import toast from 'react-hot-toast';

const showToast = (message, type) => {
    toast(message, {
        icon: type === 'success' ? '✅' : '✖️',
        style: {
            borderRadius: '10px',
            background: type === 'success' ? '#28a745' : '#dc3545',
            color: '#fff',
        },
    });
};

export const showSuccessToast = (message) => {
    showToast(message, 'success');
};

export const showErrorToast = (message) => {
    showToast(message, 'error');
};
