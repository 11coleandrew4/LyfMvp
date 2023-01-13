import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';

const Header = () => {
  const { user, isLoading } = useUser();

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/admin/Dashboard">
            <Image
              className="w-auto h-8 sm:h-20 cursor-pointer m-auto"
              src="/apexlogo.png"
              alt=""
              height={65}
              width={200}
              priority="true"
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Administrative Access Only
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <Link href="/api/auth/login">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-apexB py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-apexG focus:outline-none focus:ring-2 focus:ring-apexG focus:ring-offset-2 duration-300"
                >
                  Continue to login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
