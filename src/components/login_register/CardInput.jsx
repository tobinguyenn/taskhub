/* eslint-disable jsx-a11y/label-has-associated-control */
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { Button } from 'components/login_register/button';
import { Checkbox } from 'components/login_register/checkbox';
import { Input } from 'components/login_register/input';

function CardInput() {
  return (
    <div className="flex flex-col mt-20 w-1/3 m-auto border rounded-xl items-center bg-red-300 ">
      <div className="italic font-semibold p-3">LOGIN</div>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <div className="flex w-2/3 items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me?
        </label>
      </div>
      <Button variant="login">Login</Button>
      <div className="w-full flex justify-around p-1">
        <Button size="half">
          <EnvelopeOpenIcon className="font-ligh mr-1" />
          <div className="font-extralightthin">Email</div>
        </Button>
        <Button size="half">
          <EnvelopeOpenIcon className="font-light m-1" />
          <div className="font-extralightthin">FaceBook</div>
        </Button>
      </div>
    </div>
  );
}

export default CardInput;

export function ButtonSecondary() {}
