import { Button } from 'components/ui/button';
import { CardDescription, CardForm, CardHeader, CardTitle } from 'components/ui/card';
import { Checkbox } from 'components/ui/checkbox';
import { Input } from 'components/ui/input';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = () => {
    // action future here
    alert('Register complete');
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[linear-gradient(to_right_top,_#a349a7,_#9a55ae,_#9160b4,_#8969b8,_#8271ba)]">
      <CardForm onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className="text-3xl my-5">REGISTER</CardHeader>
        <Input
          type="email"
          placeholder="Email"
          icon={<MdEmail />}
          {...register('email', { required: 'Please enter real email' })}
        />
        {errors.email && <CardDescription className="text-red-400">{errors.email.message}</CardDescription>}
        <Input
          type="password"
          placeholder="Password"
          icon={<FaLock />}
          {...register('password', {
            required: 'Please enter password',
            minLength: { value: 6, message: 'password need at least 6 characters' },
          })}
        />
        {errors.password && <CardDescription className="text-red-400">{errors.password.message}</CardDescription>}
        <Input
          type="password"
          placeholder="Retype Password"
          icon={<FaLock />}
          {...register('retypePassword', {
            required: 'Please re-enter password',
            validate: (value) => value === getValues('password') || 'The passwords do not match',
          })}
        />
        {errors.retypePassword && (
          <CardDescription className="text-red-400">{errors.retypePassword.message}</CardDescription>
        )}
        <Checkbox label="Remember me ?" className="w-2/3" />
        <Button variant="submit" type="submit">
          Register
        </Button>
        <CardDescription className="py-1">More choices</CardDescription>
        <CardTitle className="py-3">
          Already have an account?{' '}
          <Link to="/login" className="underline">
            Login now!
          </Link>
        </CardTitle>
      </CardForm>
      <Outlet />
    </div>
  );
}

export default Login;
