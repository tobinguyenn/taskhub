import { Button } from 'components/login_register/button';
import { Checkbox } from 'components/login_register/checkbox';
import { Input } from 'components/login_register/input';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

function CardInput() {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-20 w-1/3 m-auto border rounded-xl items-center bg-gray-100 shadow-2xl "
    >
      <div className="italic font-semibold p-3 text-2xl">LOGIN</div>
      <Input type="email" placeholder="Email" {...register('email', { required: 'Please enter real email' })} />
      {errors.email?.message && (
        <div className="text-red-500 font-extralight italic text-xs">{errors.email.message}</div>
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
        <div className="text-red-500 font-extralight italic text-xs">{errors.password.message}</div>
      )}{' '}
      <div className="flex w-2/3 m-2 items-center space-x-2">
        <Checkbox id="terms" />
        <div className="text-sm text-gray-500 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Remember me?
        </div>
      </div>
      <Button variant="login" type="submit">
        Login
      </Button>
      <div className="italic text-xs ">Or login by</div>
      <div className="w-full flex justify-center p-1 px-2">
        <Button variant="gg" size="half">
          <FaGoogle className="mr-1" />
          <div className="font-extralightthin">Google</div>
        </Button>
        <Button variant="fb" size="half">
          <FaFacebookF className="mr-1" />
          <div className="font-extralightthin">FaceBook</div>
        </Button>
      </div>
      <div className="text-black font-extralight text-sm p-2">
        Dont have a account?{' '}
        <a className="italic font-normal border-b border-b-black" href="http://">
          Register Now!
        </a>
      </div>
    </form>
  );
}

export default CardInput;
