declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string;
      region: string;
      render: string;
      stylesheets: string[];
    };
  }
}

export {};