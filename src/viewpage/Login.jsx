import { Button } from 'components/ui/button';
import { CardCheckBox, CardDescription, CardForm, CardHeader, CardTitle } from 'components/ui/card';
import { Checkbox } from 'components/ui/checkbox';
import { Input } from 'components/ui/input';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

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
    <CardForm onSubmit={handleSubmit(onSubmit)}>
      <CardHeader>
        <CardTitle className="italic font-semibold p-3 text-2xl">LOGIN</CardTitle>
      </CardHeader>
      <Input type="email" placeholder="Email" {...register('email', { required: 'Please enter real email' })} />
      {errors.email?.message && (
        <CardDescription className="text-red-400">{errors.password.message}</CardDescription>
      )}{' '}
      <Input
        type="password"
        placeholder="Password"
        {...register('password', {
          required: 'Please enter password',
          minLength: { value: 6, message: 'password need at least 6 character' },
        })}
      />
      {errors.password?.message && (
        <CardDescription className="text-red-400">{errors.password.message}</CardDescription>
      )}{' '}
      <CardCheckBox>
        <Checkbox id="terms" />
        <CardTitle>Remember me?</CardTitle>
      </CardCheckBox>
      <Button variant="login" type="submit">
        Login
      </Button>
      <CardDescription className="">Or login by</CardDescription>
      <div className="flex w-full justify-center">
        <Button variant="gg" size="half">
          <FaGoogle className="mr-1" />
          <CardTitle className="font-semibold">Google</CardTitle>
        </Button>
        <Button variant="fb" size="half">
          <FaFacebookF className="mr-1" />
          <CardTitle className="font-semibold">FaceBook</CardTitle>
        </Button>
      </div>
      <CardTitle>
        Dont have a account?{' '}
        <a className="italic" href="http://">
          Register Now!
        </a>
      </CardTitle>
    </CardForm>
  );
}

export default Login;
