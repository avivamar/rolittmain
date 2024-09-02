'use client';

import React from 'react';

const SplineWrapper = (props) => {
  const [Spline, setSpline] = React.useState(null);

  React.useEffect(() => {
    import('@splinetool/react-spline').then((mod) => {
      setSpline(() => mod.default);
    });
  }, []);

  if (!Spline) {
    return <div>Loading 3D scene...</div>;
  }

  return <Spline {...props} />;
};

export default SplineWrapper;