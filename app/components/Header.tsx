import Link from "next/link";

const Header = () => {
  return (
    <header className='py-2'>
      <div className='align-element flex justify-center sm:justify-end '>
        <div className='flex gap-x-6 justify-center items-center'>
          <Link href='/login' className='link link-hover text-xs sm:text-sm'>
            Sign in / Guest
          </Link>
          <Link href='/signup' className='link link-hover text-xs sm:text-sm'>
            Create an Account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;