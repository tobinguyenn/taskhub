import { Button } from 'components/ui/button';
import { CardCheckBox, CardDescription, CardForm, CardHeader, CardTitle } from 'components/ui/card';
import { Checkbox } from 'components/ui/checkbox';
import { Input } from 'components/ui/input';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-bl from-purple-400 via-pink-300 to-blue-200">
      <CardForm onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle className="font-bold p-3 text-3xl">REGISTER</CardTitle>
        </CardHeader>
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
        <CardCheckBox>
          <Checkbox id="terms" className="text-green-500" />
          <CardTitle>Remember me?</CardTitle>
        </CardCheckBox>
        <Button variant="submit" type="submit">
          Register
        </Button>
        <CardDescription className="py-1">More choices</CardDescription>
        <CardTitle className="py-3">
          Already have an account?{' '}
          <a className="underline" href="http://">
            Login now
          </a>
        </CardTitle>
      </CardForm>
    </div>
  );
}

export default Login;
