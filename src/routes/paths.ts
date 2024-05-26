// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  MENUE: '/menue',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // menu
  menue: {
    dataDashboard: `${ROOTS.MENUE}/dataDashboard`,
    customSetting: `${ROOTS.MENUE}/customSetting`,
    management: {
      root: `${ROOTS.MENUE}/management`,
      incomeOutcome: `${ROOTS.MENUE}/management/incomeOutcome`,
      assetManagement: `${ROOTS.MENUE}/management/assetManagement`,
    },
  },
};
