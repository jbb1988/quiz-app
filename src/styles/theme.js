// Color variables
export const colors = {
  primary: '#0088cc',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
  textPrimary: '#212529',
  textSecondary: '#6c757d',
  backgroundLight: '#f8f9fa',
  backgroundDark: '#343a40'
};

// Gradients
export const gradients = {
  primary: 'linear-gradient(135deg, #0088cc 0%, #0066cc 100%)',
  secondary: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)',
  success: 'linear-gradient(135deg, #28a745 0%, #218838 100%)',
  danger: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
  warning: 'linear-gradient(135deg, #ffc107 0%, #e0a800 100%)'
};

// Course category gradients
export const courseGradients = {
  software: 'linear-gradient(135deg, #0088cc 0%, #0066cc 100%)',
  hardware: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
  company: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
  mcc: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
  sales: 'linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)'
};

// Shadows
export const shadows = {
  small: '0 2px 4px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
  large: '0 8px 16px rgba(0, 0, 0, 0.1)'
};

// Transitions
export const transitions = {
  default: 'all 0.2s ease',
  slow: 'all 0.3s ease',
  fast: 'all 0.1s ease'
};

// LOCKED DESIGN ELEMENTS - DO NOT MODIFY
export const approvedDesigns = {
  header: {
    height: '4rem',
    background: 'white',
    boxShadow: shadows.medium,
    padding: '1rem 2rem',
    position: 'sticky',
    zIndex: 100
  },
  hamburgerMenu: {
    icon: ['fa-bars', 'fa-times'],
    size: '1.5rem',
    color: colors.textPrimary,
    hover: colors.primary,
    padding: '0.5rem',
    zIndex: 1000
  },
  navigation: {
    icons: {
      home: 'fa-home',
      courses: 'fa-book',
      size: '1.25rem',
      color: colors.primary
    },
    text: {
      color: colors.textPrimary,
      gap: '1.5rem',
      padding: '0.75rem 1.25rem',
      borderRadius: '0.5rem',
      hover: colors.backgroundLight
    }
  },
  userInfo: {
    fontWeight: 500,
    color: colors.textPrimary
  },
  sideMenu: {
    panel: {
      width: '300px',
      height: '100vh',
      background: 'white',
      boxShadow: shadows.large,
      zIndex: 900,
      transform: {
        closed: 'translateX(-100%)',
        open: 'translateX(0)'
      },
      transition: transitions.slow
    },
    userProfile: {
      marginTop: '3rem',
      padding: '2rem',
      borderBottom: `1px solid ${colors.backgroundLight}`,
      avatar: {
        size: '80px',
        borderRadius: '50%',
        iconSize: '2.5rem',
        iconColor: colors.textSecondary
      },
      name: {
        fontSize: '1.25rem',
        color: colors.textPrimary
      },
      email: {
        fontSize: '0.875rem',
        color: colors.textSecondary
      }
    },
    navigation: {
      padding: '1rem',
      gap: '1rem',
      borderRadius: '0.5rem',
      iconSize: '1.25rem',
      iconWidth: '1.5rem',
      hover: colors.backgroundLight
    },
    footer: {
      padding: '1.5rem',
      borderTop: `1px solid ${colors.backgroundLight}`,
      logout: {
        color: colors.danger,
        hover: 'rgba(220, 53, 69, 0.1)',
        gap: '0.75rem'
      },
      version: {
        fontSize: '0.75rem',
        color: colors.textSecondary
      }
    }
  }
};
