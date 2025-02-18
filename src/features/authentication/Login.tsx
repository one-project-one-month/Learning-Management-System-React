import Figure from '@/assets/undraw_online-learning_tgmv.svg';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <div className="grid h-[80vh] justify-center items-center  md:grid-cols-2 border-t-2 border-gray-200 md:p-4">
      {/* left side image & text */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <img src={Figure} alt="" className="w-60" />
        <div className="max-w-96">
          <h2 className="text-2xl font-bold text-center">
            Empower Your Learning Journey with{' '}
            <span className="font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              LMS Platform
            </span>
          </h2>
          <p className="text-center mt-2 text-sm text-gray-400">
            Unlock Knowledge, Track Progress, and Achieve Your Academic Goals
            Seamlessly
          </p>
        </div>
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;
