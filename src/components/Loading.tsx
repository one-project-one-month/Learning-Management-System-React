import Lottie from 'lottie-react';
import LoadingAnimation from '../';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 h-screen">
        <Lottie animationData={LoadingAnimation} />
      </div>
    </div>
  );
}
