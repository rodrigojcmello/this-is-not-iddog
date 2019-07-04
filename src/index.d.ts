declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import React from 'react';

  const value: React.FC<React.SVGAttributes<SVGElement>>;
  export default value;
}

declare const PRODUCTION: boolean;
