import { Button } from 'components/ui/button';
import { CardCheckBox, CardDescription, CardForm, CardHeader, CardTitle } from 'components/ui/card';
import { Checkbox } from 'components/ui/checkbox';
import { Input } from 'components/ui/input';
import { useForm } from 'react-hook-form';
import { FaFacebookSquare, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // action future here
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-bl from-purple-400 via-pink-300 to-blue-200 ">
      <CardForm onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle className="font-bold p-3 text-3xl">LOGIN</CardTitle>
        </CardHeader>
        <Input
          type="email"
          placeholder="Email"
          icon={<MdEmail />}
          {...register('email', { required: 'Please enter real email' })}
        />
        {errors.email?.message && <CardDescription className="text-red-400">{errors.email.message}</CardDescription>}{' '}
        <Input
          type="password"
          placeholder="Password"
          icon={<FaLock />}
          {...register('password', {
            required: 'Please enter password',
            minLength: { value: 6, message: 'password need at least 6 character' },
          })}
        />
        {errors.password?.message && (
          <CardDescription className="text-red-400">{errors.password.message}</CardDescription>
        )}{' '}
        <CardCheckBox>
          <Checkbox id="terms" className="text-green-500" />
          <CardTitle>Remember me?</CardTitle>
        </CardCheckBox>
        <Button variant="submit" type="submit">
          Login
        </Button>
        <CardDescription className="py-1">Or login by</CardDescription>
        <div className="flex w-full justify-center">
          <Button variant="outline" size="half">
            <FcGoogle />
            <CardTitle className="text-yellow-700 font-medium">Google</CardTitle>
          </Button>
          <Button variant="outline" size="half">
            <FaFacebookSquare className="text-blue-700" />
            <CardTitle className="text-blue-700 font-medium">FaceBook</CardTitle>
          </Button>
        </div>
        <CardTitle className="py-3">
          Dont have a account?{' '}
          <Link to="/register" className="underline">
            Register now!
          </Link>
        </CardTitle>
      </CardForm>
      <Outlet />
    </div>
  );
}

export default Login;
